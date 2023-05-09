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
	},
};

export { resolvers };
