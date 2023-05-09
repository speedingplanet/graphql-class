import { GraphQLError } from 'graphql';
import { movies } from './data/all-data-typed.js';
import { type Movie, type Resolvers } from './generated/graphql.js';

let resolvers: Resolvers = {
	Query: {
		helloWorld(parent, args) {
			let name = args.name;
			if (!name) name = 'everyone';
			return `Hello, ${name}!`;
		},

		movies() {
			return movies;
		},

		moviesByGenre(parent, { genre }) {
			/*
				// The line below is a short version of this
				let foundMovies = movies.filter(movie => {
					return movie.genres.includes(genre);
				});

				return foundMovies;
			*/
			return movies.filter(movie => movie.genres?.includes(genre));
		},
	},
	Mutation: {
		addMovie(parent, args) {
			let nextId = getNextId(movies, 'id');
			let newMovie: Movie = {
				...args.movie,
				id: nextId,
			};

			let duplicateTitle = movies.find(movie => movie.title === newMovie.title);
			if (duplicateTitle) {
				// eslint-disable-next-line max-len
				throw new GraphQLError(
					`Movie "${newMovie.title}" already exists in the database!`,
					{
						extensions: {
							code: 'BAD_USER_INPUT',
						},
					}
				);
			}

			movies.push(newMovie);
			return newMovie;
		},
	},
};

function getNextId<T>(records: T[], field: keyof T) {
	let values = records.map(r => r[field]) as number[];
	return Math.max(...values) + 1;
}

export { resolvers };
