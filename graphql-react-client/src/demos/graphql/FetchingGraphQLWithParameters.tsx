import { useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import { type Movie } from '../../generated/graphql';
import { QUERY_MOVIES_BY_GENRE } from './graphql-queries';

export default function ApolloGraphql() {
	return (
		<section>
			<h4>Fetching Movies by Genre</h4>
			<RenderGraphql />
		</section>
	);
}

export function RenderGraphql() {
	let [userGenre, setUserGenre] = useState('');

	let queryRecord = useLazyQuery<{ moviesByGenre: Movie[] }>(QUERY_MOVIES_BY_GENRE);
	let runQuery = queryRecord[0];
	let queryStatus = queryRecord[1];

	/*
	let [loadQuery,
		{
			called, loading, data,
		}] = useLazyQuery<{ movies: Movie[] }>(
		QUERY_MOVIES_BY_GENRE
	);
	*/

	let handleSearchClick = async () => {
		if (userGenre) {
			await runQuery({ variables: { genre: userGenre } });
		} else {
			await runQuery();
		}
	};

	if (queryStatus.loading) return <p>Loading...</p>;

	return (
		<section className="row">
			<div className="col">
				<label
					htmlFor="genre"
					className="form-label"
				>
					Genre:
				</label>
				<input
					type="text"
					name="user-genre"
					id="user-genre"
					className="form-control"
					value={userGenre}
					onChange={(event) => setUserGenre(event.currentTarget.value)}
				/>
				<div className="mt-2">
					<button
						className="btn btn-primary"
						onClick={handleSearchClick}
					>
						Filter by genre
					</button>
				</div>
			</div>
			<div className="col">
				{queryStatus.data?.moviesByGenre
					? (
						<RenderMovieList movies={queryStatus.data.moviesByGenre} />
					)
					: queryStatus.called && queryStatus.loading
						? (
							<p>Loading...</p>
						)
						: (
							<span>No movies requested yet</span>
						)}
			</div>
		</section>
	);
}

function RenderMovieList({ movies }: { movies: Array<Partial<Movie>> }) {
	return (
		<>
			<h4>Movies</h4>
			<ul>
				{movies.map((movie) => {
					return (
						<li key={movie.id}>
							{movie.title} [{movie.genres?.join(', ')}]
						</li>
					);
				})}
			</ul>
		</>
	);
}
