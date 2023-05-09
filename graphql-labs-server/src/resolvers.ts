import { GraphQLError } from 'graphql';
import { movies, actors, movieActors } from './data/all-data-typed.js';
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

		actors() {
			return actors;
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
	Movie: {
		actors(parent) {
			// parent.id is the movie id we're currently looking at
			// Array of just the MovieActor objects that have parent.id as the movieId
			let matchingMovieActors = movieActors.filter(movie => movie.movieId === parent.id);

			// Array of actorIds
			let matchingActorIds = matchingMovieActors.map(ma => ma.actorId);

			// Array of Actors where their actorId is in the array of actorIds
			let matchingActors = actors.filter(actor => matchingActorIds.includes(actor.id));

			return matchingActors;
		},
		isAwesome(parent) {
			return parent.rating === 5;
		},
	},
	Actor: {
		movies(parent) {
			let matchingMovieActors = movieActors.filter(movie => movie.actorId === parent.id);
			let matchingMovieIds = matchingMovieActors.map(ma => ma.movieId);
			let matchingMovies = movies.filter(movie => matchingMovieIds.includes(movie.id));
			return matchingMovies;
		},
	},
};

function getNextId<T>(records: T[], field: keyof T) {
	let values = records.map(r => r[field]) as number[];
	return Math.max(...values) + 1;
}

export { resolvers };
