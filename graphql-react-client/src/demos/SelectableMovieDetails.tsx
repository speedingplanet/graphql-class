import { type Movie } from '../generated/graphql';

export interface MovieDetailsProps {
	movie: Movie;
}

type MovieKeys = Array<keyof Movie>;

export default function SelectableMovieDetailsWrapper() {
	let raiders: Movie = {
		id: 1,
		title: 'Raiders of the Lost Ark',
		year: 1981,
		rating: 5,
		genres: [
			'action',
			'adventure',
			'supernatural',
		],
	};

	let fieldsToDisplay: MovieKeys = ['title', 'year'];

	return (
		<SelectableMovieDetails
			movie={raiders}
			showFields={fieldsToDisplay}
		/>
	);
}

interface SelectableMovieDetailsProps extends MovieDetailsProps {
	showFields: MovieKeys;
}

// export function SelectableMovieDetails(props: MovieDetailsProps & { showFields: MovieKeys }) {
export function SelectableMovieDetails(props: SelectableMovieDetailsProps) {
	return (
		<ul>
			{props.showFields.map((field, index) => (
				<li key={index}>
					{field}: {props.movie[field]}
				</li>
			))}
		</ul>
	);
}
