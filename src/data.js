export const data = [
  { id: "28", genre: "Action" },
  { id: "35", genre: "Comedy" },
  { id: "80", genre: "Crime" },
  { id: "18", genre: "Drama" },
  { id: "14", genre: "Fantasy" },
  { id: "27", genre: "Horror" },
  { id: "9648", genre: "Mystery" },
  { id: "10794", genre: "Romance" },
  { id: "868", genre: "Sci - fi " },
  { id: "53", genre: "Thriller" },
];

export const imgpath = "https://image.tmdb.org/t/p/w1280";

//api paths
export const baseUrl = "https://api.themoviedb.org/3";
export const apiKey = "125429bf4c273f1b1157d696c699b8d2";

export const popular = `${baseUrl}/discover/movie?sort_by=popularity.desc&api_key=${apiKey}&page=1`;
export const trending = `${baseUrl}/trending/movie/week?api_key=${apiKey}&page=1`;
export const upcoming = `${baseUrl}/movie/upcoming?api_key=${apiKey}&page=1`;
export const tvShows = `${baseUrl}/tv/popular?api_key=${apiKey}&language=en-US&page=`;
export const search = `${baseUrl}/search/multi?api_key=${apiKey}&query=`;
