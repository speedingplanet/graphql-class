import type { RouteObject } from 'react-router-dom';
import FetchingGraphQLWithParameters from './graphql/FetchingGraphQLWithParameters';
import AddingMoviesWithGraphQL from './graphql/AddingMoviesWithGraphQL';
import UpdatingMoviesWithGraphQL from './graphql/updating/UpdatingMoviesWithGraphQL';
import FetchingGraphQL from './graphql/FetchingGraphQL';
import FullForm from './FullForm';

let routes = new Map<RouteObject, string>();
routes.set(
	{
		path: '/',
		element: <p>Placeholder</p>,
		index: true,
	},
	'index'
);

routes.set(
	{
		path: 'apollo-graphql',
		element: <FetchingGraphQL />,
	},
	'GraphQL: Fetching data with Apollo'
);

routes.set(
	{
		path: 'graphql-with-params',
		element: <FetchingGraphQLWithParameters />,
	},
	'GraphQL: Fetching data with parameters'
);

routes.set(
	{
		path: 'graphql-add-movie',
		element: <AddingMoviesWithGraphQL />,
	},
	'GraphQL: Add a movie'
);

routes.set(
	{
		path: 'graphql-update-movie',
		element: <UpdatingMoviesWithGraphQL />,
	},
	'GraphQL: Update a movie'
);

routes.set(
	{
		path: 'full-form',
		element: <FullForm />,
	},
	'Full form (controlled vs uncontrolled)'
);

export { routes };
