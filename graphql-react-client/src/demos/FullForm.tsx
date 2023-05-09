import React, { useState } from 'react';
import { type MovieInput, type Movie } from '../generated/graphql';

export default function FullForm() {
	return (
		<section className="row">
			<div className="col">
				<FullFormUncontrolled />
			</div>
			<div className="col">
				<FullFormControlled />
			</div>
		</section>
	);
}

export function FullFormUncontrolled() {
	let handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
		event.preventDefault();
		let form = event.currentTarget;
		let data = new FormData(form);
		let movie: Partial<Movie> = {};

		movie.title = data.get('title') as string;
		movie.genres = [data.get('genres') as string];
		movie.year = Number(data.get('year') as string);
		movie.rating = Number(data.get('title') as string);
		movie.id = Date.now(); // Large but reasonably unique

		console.log('Adding a movie:', movie);
	};

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<h4>Uncontrolled Movie Form</h4>
			</div>
			<div>
				<label
					htmlFor="movie-title"
					className="form-label"
				>
					Title
				</label>
				<input
					type="text"
					name="title"
					id="movie-title"
					className="form-control"
				/>
			</div>
			<div>
				<label
					htmlFor="movie-year"
					className="form-label"
				>
					Year
				</label>
				<input
					type="text"
					name="year"
					id="movie-year"
					className="form-control"
				/>
			</div>
			<div>
				<label
					htmlFor="movie-rating"
					className="form-label"
				>
					Rating
				</label>
				<input
					type="text"
					name="rating"
					id="movie-rating"
					className="form-control"
				/>
			</div>
			<div>
				<label
					htmlFor="movie-genres"
					className="form-label"
				>
					Genres
				</label>
				<input
					type="text"
					name="genres"
					id="movie-genres"
					className="form-control"
				/>
			</div>
			<div className="mt-2">
				<button
					className="btn btn-primary"
					type="submit"
				>
					Uncontrolled
				</button>
			</div>
		</form>
	);
}

interface FullFormControlledProps {
	submitAction?: (movie: MovieInput) => void;
	submitButtonLabel?: string;
	formLabel?: string;
	movieToEdit?: Movie;
}

export function FullFormControlled({
	submitAction,
	submitButtonLabel,
	formLabel,
	movieToEdit,
}: FullFormControlledProps) {
	let [movie, setMovie] = useState<Partial<MovieInput>>({});

	let updateMovie: React.FormEventHandler<HTMLInputElement> = (event) => {
		let field = event.currentTarget.name;
		let value: string | string[] | number = event.currentTarget.value;

		if ([
			'directors',
			'writers',
			'genres',
		].includes(field)) {
			value = value.split(/,\s*/);
		} else if (['rating', 'year'].includes(field)) {
			value = Number(value);
		}

		setMovie({
			...movie,
			[field]: value,
		});
	};

	let handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
		event.preventDefault();
		if (submitAction) {
			if (movie.title) {
				let actualMovie: MovieInput = {
					title: movie.title,
					genres: movie.genres ?? [],
					year: movie.year,
					rating: movie.rating,
				};

				submitAction(actualMovie);
			}
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<h4>{formLabel ?? 'Controlled Movie Form'}</h4>
			</div>
			<div>
				<label
					htmlFor="movie-title"
					className="form-label"
				>
					Title
				</label>
				<input
					type="text"
					name="title"
					id="movie-title"
					className="form-control"
					// movie.title will be undefined at first which will throw an error
					// when we try to edit that field (uncontrolled -> controlled component)
					// Fall back to movieToEdit.title when movie.title is blank, which should
					// prevent errors and warnings
					value={movie.title ?? movieToEdit?.title ?? ''}
					onChange={updateMovie}
				/>
			</div>
			<div>
				<label
					htmlFor="movie-year"
					className="form-label"
				>
					Year
				</label>
				<input
					type="text"
					name="year"
					id="movie-year"
					className="form-control"
					value={movie.year ?? movieToEdit?.year ?? ''}
					onChange={updateMovie}
				/>
			</div>
			{/*
			<div>
				<label
					htmlFor="movie-director"
					className="form-label"
				>
					Director
				</label>
				<input
					type="text"
					name="directors"
					id="movie-director"
					className="form-control"
					value={movie.directors ?? movieToEdit?.directors ?? ''}
					onChange={updateMovie}
				/>
			</div>
			<div>
				<label
					htmlFor="movie-writer"
					className="form-label"
				>
					Writer
				</label>
				<input
					type="text"
					name="writers"
					id="movie-writer"
					className="form-control"
					value={movie.writers ?? movieToEdit?.writers ?? ''}
					onChange={updateMovie}
				/>
			</div>
 */}
			<div>
				<label
					htmlFor="movie-rating"
					className="form-label"
				>
					Rating
				</label>
				<input
					type="text"
					name="rating"
					id="movie-rating"
					className="form-control"
					value={movie.rating ?? movieToEdit?.rating ?? ''}
					onChange={updateMovie}
				/>
			</div>
			<div>
				<label
					htmlFor="movie-genres"
					className="form-label"
				>
					Genres
				</label>
				<input
					type="text"
					name="genres"
					id="movie-genres"
					className="form-control"
					value={getGenres(movie, movieToEdit)
						.toString()}
					onChange={updateMovie}
				/>
			</div>
			<div className="mt-2">
				<button
					className="btn btn-danger"
					type="submit"
				>
					{submitButtonLabel ?? 'Controlled'}
				</button>
			</div>
		</form>
	);
}

function getGenres(movie: Partial<MovieInput>, movieToEdit?: Movie) {
	if (movie.genres && movie.genres !== null) return movie.genres;
	if (movieToEdit?.genres && movieToEdit.genres !== null) return movieToEdit.genres;

	return '';
}
