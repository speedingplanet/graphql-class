import type { Resolvers, Student } from './generated/graphql.js';
import { students } from './data/all-data-typed.js';
import _ from 'lodash';
import { GraphQLError } from 'graphql';

export const resolvers: Resolvers = {
	Query: {
		// hello: (parent, { name }: { name: string }) => `Hello ${name ?? 'everyone'}!`,

		// All of these are equivalent (assignment, declaration, arrow)
		// hello: function () { return 'Hi!'; },
		// hello() { return 'Hi!'; },
		// hello: () => 'Hi!',
		hello(parent, args) {
			// if args.firstName is null or undefined, use 'everyone' instead.
			/*
			if (args.firstName === null || args.firstName === undefined) {
				return 'everyone'
			} else {
				return args.firstName
			}
			*/
			let firstName = args.firstName ?? 'everyone';
			return `Hi ${firstName}!`;
		},
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
		studentsWithFields(parent, args) { // studentsWithFields(province: 'CA', country: 'US')
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
			let newStudent: Student = {
				...args.student,
				id,
			};

			students.push(newStudent);

			return newStudent;
		},

		updateStudent(parent, args) {
			let id = args.id;

			let foundStudent = students.find(s => s.id === id);
			if (foundStudent === undefined) {
				throw new GraphQLError(`Invalid argument value (id ${id} not found`, {
					extensions: { code: 'BAD_USER_INPUT' },
				});
			}

			Object.assign(foundStudent, args.student);
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
