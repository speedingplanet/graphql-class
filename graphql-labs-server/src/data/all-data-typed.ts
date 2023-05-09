import { type Actor, type Movie } from '../generated/graphql.js';

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

export const actors: Actor[] = [
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

export interface MovieActor {
	movieId: number;
	actorId: number;
}

export const movieActors: MovieActor[] = [
	{
		movieId: 1,
		actorId: 8,
	},
	{
		movieId: 1,
		actorId: 9,
	},
	{
		movieId: 2,
		actorId: 2,
	},
	{
		movieId: 2,
		actorId: 3,
	},
	{
		movieId: 2,
		actorId: 4,
	},
	{
		movieId: 2,
		actorId: 5,
	},
	{
		movieId: 2,
		actorId: 6,
	},
	{
		movieId: 2,
		actorId: 7,
	},
];
