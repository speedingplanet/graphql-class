import type { Resolvers } from './generated/graphql.js';
import { type Student, students } from './data/all-data-typed.js';
import _ from 'lodash';
import { GraphQLError } from 'graphql';

export const resolvers: Resolvers = {
	Query: {
		hello: (parent, { name }: { name: string }) => `Hello ${name ?? 'everyone'}!`,
		students() {
			return students;
		},
		studentsWithFilter(parent, args) {
			// Shortcut, no need to do filtering work if args is not present or empty
			if (!args || _.isEmpty(args)) return students;

			let filteredStudents: Student[] = [...students];
			// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
			filteredStudents = _.filter(students, args.filter) as Student[];
			return filteredStudents;
		},
		studentsWithFields(parent, args) {
			// Shortcut, no need to do filtering work if args is not present or empty
			if (!args || _.isEmpty(args)) return students;
			let passedArgs = { filter: { ...args } };
			return this.studentsWithFilter(null, passedArgs);
		},
		studentById(parent, { id }) {
			// Have to return null, not undefined
			return students.find(s => s.id === id) ?? null;
		},
	},

	Mutation: {
		addStudent(parent, args) {
			let id = getNextId(students, 'id');
			let newStudent = {
				...args.student,
				id,
			};

			// TODO: Some complexity with province: null on the TS side and
			// and optional province on the GraphQL side
			students.push(newStudent as Student);

			return newStudent;
		},

		updateStudent(parent, args) {
			let id = args.id;

			let foundStudent = students.find(m => m.id === id);
			if (foundStudent === null || typeof foundStudent !== 'object') {
				throw new GraphQLError(`Invalid argument value (id ${id} not found`, {
					extensions: { code: 'BAD_USER_INPUT' },
				});
			} else {
				Object.assign(foundStudent, args.student);
			}

			return foundStudent;
		},

		deleteStudent(parent, args) {
			let id = args.id;

			let foundStudentIndex = students.findIndex(m => m.id === id);
			if (foundStudentIndex === -1) {
				throw new GraphQLError(`Invalid argument value (id ${id} not found`, {
					extensions: { code: 'BAD_USER_INPUT' },
				});
			} else {
				students.splice(foundStudentIndex, 1);
			}
			return true;
		},
	},
};

function getNextId<T>(records: T[], field: keyof T) {
	let values = records.map(r => r[field]) as number[];
	return Math.max(...values) + 1;
}
