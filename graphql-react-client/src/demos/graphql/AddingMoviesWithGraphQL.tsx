import { FullFormControlled } from '../FullForm';
import { gql, useMutation } from '@apollo/client';
import { SelectableMovieDetails } from '../SelectableMovieDetails';
import { type MovieInput, type Movie } from '../../generated/graphql';

let ADD_MOVIE = gql`
	mutation AddMovie($movie: MovieInput!) {
		addMovie(movie: $movie) {
			id
			title
		}
	}
`;

export default function AddingMoviesWithGraphQL() {
	// const [addMovie, { data }] = useMutation(ADD_MOVIE);
	const mutationTuple = useMutation<{ addMovie: Movie }>(ADD_MOVIE);
	const addMovie = mutationTuple[0];
	const mutationStatus = mutationTuple[1];

	let handleSubmitAction = async (movie: MovieInput) => {
		console.log('adding movie:', movie);
		await addMovie({ variables: { movie } });
	};

	return (
		<section className="row">
			<div className="col">
				<FullFormControlled
					submitAction={handleSubmitAction}
					submitButtonLabel="Add movie"
					formLabel="Adding a movie"
				/>
			</div>
			<div className="col"><MovieDetailsWrapper movie={mutationStatus.data?.addMovie} /></div>
		</section>
	);
}

interface MovieDetailsWrapperProps {
	movie?: Movie;
}

function MovieDetailsWrapper({ movie }: MovieDetailsWrapperProps) {
	if (!movie) {
		return <p></p>;
	} else {
		return <SelectableMovieDetails movie={movie} showFields={['id', 'title']} />;
	};
}
