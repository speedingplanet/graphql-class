import { type Movie } from '../../../generated/graphql';
import type { UpdateMoviesPayload } from '../../demos-types';

export interface MovieDetailsProps {
	movie?: Movie;
}

export function MovieDetails(props: MovieDetailsProps) {
	if (!props.movie) return <ul></ul>;

	let {
		title, year, rating, genres,
	} = props.movie;

	return (
		<ul>
			<li>Title: {title}</li>
			<li>Year: {year}</li>
			<li>Rating: {rating}</li>
			<li>Genres: {genres?.join(', ')}</li>
		</ul>
	);
}

interface AsyncMovieDetailsProps {
	called: boolean;
	loading: boolean;
	data?: UpdateMoviesPayload | null;
}
export function AsyncMovieDetails({
	called, loading, data,
}: AsyncMovieDetailsProps) {
	if (called && loading) return <p>Loading updated movie...</p>;
	if (data && data !== null) return <MovieDetails movie={data.updateMovie} />;
	return null;
}
