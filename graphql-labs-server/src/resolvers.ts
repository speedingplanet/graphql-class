import { movies } from './data/all-data-typed.js';
import { type Resolvers } from './generated/graphql.js';

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
};

export { resolvers };
