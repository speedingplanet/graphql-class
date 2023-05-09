import type { Person, Movie } from './generated/graphql.js';

export interface MoviesPeople {
	id: number;
	movieId: number;
	personId: number;
	job: Job;
}

export enum Job {
	ACTOR = 1,
	DIRECTOR = 2,
	WRITER = 3,
	PRODUCER = 4,
	EXECUTIVE_PRODUCER = 5,
	CINEMATOGRAPHER = 6
};

export const movies: Movie[] = [
	{
		id: 1,
		title: 'Raiders of the Lost Ark',
		year: 1981,
		rating: 5,
		genres: [
			'action',
			'adventure',
			'supernatural',
		],
	},
	{
		id: 2,
		title: 'Heat',
		year: 1995,
		rating: 5,
		genres: [
			'crime',
			'police',
			'drama',
			'action',
		],
	},
	{
		id: 3,
		title: 'Mad Max: Fury Road',
		year: 2015,
		rating: 4,
		genres: ['action', 'post-apocalypse'],
	},
	{
		id: 4,
		title: 'Scott Pilgrim vs. the World',
		year: 2010,
		rating: 4,
		genres: ['comedy', 'music'],
	},
	{
		id: 5,
		title: 'Casino Royale',
		year: 2006,
		rating: 4,
		genres: [
			'bond',
			'spy',
			'action',
		],
	},
	{
		id: 6,
		title: 'Spirited Away',
		year: 2001,
		rating: 5,
		genres: [
			'anime',
			'fantasy',
			'family',
			'mystery',
		],
	},
	{
		id: 12,
		title: 'Casablanca',
		year: 1942,
		rating: 5,
		genres: [
			'war',
			'black-and-white',
			'romance',
			'drama',
		],
	},
	{
		id: 13,
		title: 'Goodfellas',
		year: 1990,
		rating: 5,
		genres: [
			'mob',
			'mafia',
			'crime',
			'biography',
		],
	},
	{
		id: 14,
		title: 'The Lord of the Rings: The Fellowship of the Ring',
		year: 2001,
		rating: 5,
		genres: [
			'fantasy',
			'action',
			'adventure',
		],
	},
	{
		id: 15,
		title: 'Avengers: Endgame',
		year: 2019,
		rating: 5,
		genres: [
			'comic-book',
			'sci-fi',
			'action',
			'adventure',
		],
	},
	{
		id: 17,
		title: 'A Star Is Born',
		year: 2018,
		rating: 4,
		genres: [
			'show-business',
			'musical',
			'drama',
			'romance',
		],
	},
	{
		id: 18,
		title: 'A Star Is Born',
		year: 1976,
		rating: 3,
		genres: [
			'show-business',
			'musical',
			'drama',
			'romance',
		],
	},
];

export const people: Person[] = [
	{
		id: 1,
		firstName: 'Michael',
		lastName: 'Mann',
	},
	{
		id: 2,
		firstName: 'Robert',
		lastName: 'De Niro',
	},
	{
		id: 3,
		firstName: 'Al',
		lastName: 'Pacino',
	},
	{
		id: 4,
		firstName: 'Val',
		lastName: 'Kilmer',
	},
	{
		id: 5,
		firstName: 'Diane',
		lastName: 'Venora',
	},
	{
		id: 6,
		firstName: 'Amy',
		lastName: 'Brenneman',
	},
	{
		id: 7,
		firstName: 'Ashley',
		lastName: 'Judd',
	},
	{
		id: 8,
		firstName: 'Harrison',
		lastName: 'Ford',
	},
	{
		id: 9,
		firstName: 'Karen',
		lastName: 'Black',
	},
	{
		id: 10,
		firstName: 'Steven',
		lastName: 'Spielberg',
	},
	{
		id: 11,
		firstName: 'George',
		lastName: 'Lucas',
	},
	{
		id: 12,
		firstName: 'Philip',
		lastName: 'Kaufman',
	},
	{
		id: 13,
		firstName: 'Lawrence',
		lastName: 'Kasdan',
	},
	{
		id: 14,
		firstName: 'Charlize',
		lastName: 'Theron',
	},
	{
		id: 15,
		firstName: 'Tom',
		lastName: 'Hardy',
	},
	{
		id: 16,
		firstName: 'Nicholas',
		lastName: 'Hoult',
	},
	{
		id: 17,
		firstName: 'Zoë',
		lastName: 'Kravitz',
	},
	{
		id: 18,
		firstName: 'George',
		lastName: 'Miller',
	},
	{
		id: 19,
		firstName: 'Nick',
		lastName: 'Lathouris',
	},
	{
		id: 20,
		firstName: 'Brendan',
		lastName: 'McCarthy',
	},
	{
		id: 21,
		firstName: 'Michael',
		lastName: 'Cera',
	},
	{
		id: 22,
		firstName: 'Mary',
		middleName: 'Elizabeth',
		lastName: 'Winstead',
	},
	{
		id: 23,
		firstName: 'Ellen',
		lastName: 'Wong',
	},
	{
		id: 24,
		firstName: 'Kieran',
		lastName: 'Culkin',
	},
	{
		id: 25,
		firstName: 'Allison',
		lastName: 'Pill',
	},
	{
		id: 26,
		firstName: 'Chris',
		lastName: 'Evans',
	},
	{
		id: 27,
		firstName: 'Brandon',
		lastName: 'Routh',
	},
	{
		id: 28,
		firstName: 'Brie',
		lastName: 'Larson',
	},
	{
		id: 29,
		firstName: 'Anna',
		lastName: 'Kendrick',
	},
	{
		id: 30,
		firstName: 'Edgar',
		lastName: 'Wright',
	},
	{
		id: 31,
		firstName: 'Michael',
		lastName: 'Bacall',
	},
	{
		id: 32,
		firstName: 'Daniel',
		lastName: 'Craig',
	},
	{
		id: 33,
		firstName: 'Eva',
		lastName: 'Green',
	},
	{
		id: 34,
		firstName: 'Mads',
		lastName: 'Mikkelsen',
	},
	{
		id: 35,
		firstName: 'Judi',
		lastName: 'Dench',
	},
	{
		id: 36,
		firstName: 'Martin',
		lastName: 'Campbell',
	},
	{
		id: 37,
		firstName: 'Paul',
		lastName: 'Haggis',
	},
	{
		id: 38,
		firstName: 'Robert',
		lastName: 'Wade',
	},
	{
		id: 39,
		firstName: 'Neal',
		lastName: 'Purvis',
	},
	{
		id: 40,
		firstName: 'Rumi',
		lastName: 'Hiiragi',
	},
	{
		id: 41,
		firstName: 'Miyu',
		lastName: 'Irino',
	},
	{
		id: 42,
		firstName: 'Hayao',
		lastName: 'Miyazaki',
	},
];

export const moviesPeople: MoviesPeople[] = [
	{
		id: 1,
		movieId: 1,
		personId: 8,
		job: Job.ACTOR,
	},
	{
		id: 2,
		movieId: 1,
		personId: 9,
		job: Job.ACTOR,
	},
	{
		id: 3,
		movieId: 1,
		personId: 10,
		job: Job.DIRECTOR,
	},
	{
		id: 4,
		movieId: 1,
		personId: 11,
		job: Job.WRITER,
	},
	{
		id: 5,
		movieId: 1,
		personId: 12,
		job: Job.WRITER,
	},
	{
		id: 6,
		movieId: 1,
		personId: 13,
		job: Job.WRITER,
	},
	{
		id: 7,
		movieId: 2,
		personId: 2,
		job: Job.ACTOR,
	},
	{
		id: 8,
		movieId: 2,
		personId: 3,
		job: Job.ACTOR,
	},
	{
		id: 9,
		movieId: 2,
		personId: 4,
		job: Job.ACTOR,
	},
	{
		id: 10,
		movieId: 2,
		personId: 5,
		job: Job.ACTOR,
	},
	{
		id: 11,
		movieId: 2,
		personId: 6,
		job: Job.ACTOR,
	},
	{
		id: 12,
		movieId: 2,
		personId: 7,
		job: Job.ACTOR,
	},
	{
		id: 13,
		movieId: 2,
		personId: 1,
		job: Job.DIRECTOR,
	},
	{
		id: 14,
		movieId: 2,
		personId: 1,
		job: Job.WRITER,
	},
	{
		id: 15,
		movieId: 3,
		personId: 14,
		job: Job.ACTOR,
	},
	{
		id: 16,
		movieId: 3,
		personId: 15,
		job: Job.ACTOR,
	},
	{
		id: 17,
		movieId: 3,
		personId: 16,
		job: Job.ACTOR,
	},
	{
		id: 18,
		movieId: 3,
		personId: 17,
		job: Job.ACTOR,
	},
	{
		id: 19,
		movieId: 3,
		personId: 18,
		job: Job.DIRECTOR,
	},
	{
		id: 20,
		movieId: 3,
		personId: 18,
		job: Job.WRITER,
	},
	{
		id: 21,
		movieId: 3,
		personId: 19,
		job: Job.WRITER,
	},
	{
		id: 22,
		movieId: 3,
		personId: 20,
		job: Job.WRITER,
	},
	{
		id: 23,
		movieId: 4,
		personId: 21,
		job: Job.ACTOR,
	},
	{
		id: 24,
		movieId: 4,
		personId: 22,
		job: Job.ACTOR,
	},
	{
		id: 25,
		movieId: 4,
		personId: 23,
		job: Job.ACTOR,
	},
	{
		id: 26,
		movieId: 4,
		personId: 24,
		job: Job.ACTOR,
	},
	{
		id: 27,
		movieId: 4,
		personId: 25,
		job: Job.ACTOR,
	},
	{
		id: 28,
		movieId: 4,
		personId: 26,
		job: Job.ACTOR,
	},
	{
		id: 29,
		movieId: 4,
		personId: 27,
		job: Job.ACTOR,
	},
	{
		id: 30,
		movieId: 4,
		personId: 28,
		job: Job.ACTOR,
	},
	{
		id: 31,
		movieId: 4,
		personId: 29,
		job: Job.ACTOR,
	},
	{
		id: 32,
		movieId: 4,
		personId: 30,
		job: Job.DIRECTOR,
	},
	{
		id: 33,
		movieId: 4,
		personId: 30,
		job: Job.WRITER,
	},
	{
		id: 34,
		movieId: 4,
		personId: 31,
		job: Job.WRITER,
	},
	{
		id: 35,
		movieId: 5,
		personId: 32,
		job: Job.ACTOR,
	},
	{
		id: 36,
		movieId: 5,
		personId: 33,
		job: Job.ACTOR,
	},
	{
		id: 37,
		movieId: 5,
		personId: 34,
		job: Job.ACTOR,
	},
	{
		id: 38,
		movieId: 5,
		personId: 35,
		job: Job.ACTOR,
	},
	{
		id: 39,
		movieId: 5,
		personId: 36,
		job: Job.DIRECTOR,
	},
	{
		id: 40,
		movieId: 5,
		personId: 37,
		job: Job.WRITER,
	},
	{
		id: 41,
		movieId: 5,
		personId: 38,
		job: Job.WRITER,
	},
	{
		id: 42,
		movieId: 5,
		personId: 39,
		job: Job.WRITER,
	},
	{
		id: 43,
		movieId: 6,
		personId: 40,
		job: Job.ACTOR,
	},
	{
		id: 44,
		movieId: 6,
		personId: 41,
		job: Job.ACTOR,
	},
	{
		id: 45,
		movieId: 6,
		personId: 42,
		job: Job.DIRECTOR,
	},
	{
		id: 46,
		movieId: 6,
		personId: 42,
		job: Job.WRITER,
	},
];
