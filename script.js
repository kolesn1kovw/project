const numberOfFilms = +prompt('Сколько фильмов уже посмотрели?', '');
const lastFilm = prompt('Один из последних просмотренных фильмов?');
const raitingLastFilm = +prompt('На сколько оцените его?')



const personalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false,
};

personalMovieDB.movies[`${lastFilm}`] = `${raitingLastFilm}`;


console.log(personalMovieDB);