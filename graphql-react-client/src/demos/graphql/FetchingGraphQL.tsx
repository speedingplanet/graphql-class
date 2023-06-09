import { useQuery } from '@apollo/client';
import { GET_MOVIE_TITLES } from './graphql-queries';
import { type Movie } from '../../generated/graphql';

export default function ApolloGraphql() {
	return (
		<section>
			<h4>Apollo and graphQL</h4>
			<RenderGraphql />
		</section>
	);
}

export function RenderGraphql() {
	const {
		loading, error, data,
	} = useQuery<{ movies: Array<Partial<Movie>> }>(GET_MOVIE_TITLES);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error : {error.message}</p>;
	if (!data) return <span>No requests made.</span>;

	return (
		<ul>
			{data.movies.map((movie) => {
				return <li key={movie.id}>{movie.title}</li>;
			})}
		</ul>
	);
}
