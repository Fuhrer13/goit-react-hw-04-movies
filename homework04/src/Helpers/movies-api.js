import axios from "axios";

const baseUrl = "https://api.themoviedb.org/3";
const KEY = "758852d8d40687fc46ebff7df308c64e";

export const getTrendingMovies = async () => {
  return await axios
    .get(`${baseUrl}/trending/movie/day?api_key=${KEY}`)
    .then((response) => response.data.results);
};
export const moviesSearch = async (query) => {
  return await axios
    .get(
      `${baseUrl}/search/movie?api_key=${KEY}&language=en-US&query=${query}&page=1&include_adult=false`
    )
    .then((response) => response.data.results);
};
export const getMovieDetails = async (movieId) => {
  return await axios
    .get(`${baseUrl}/movie/${movieId}?api_key=${KEY}&language=en-US`)
    .then((response) => response.data);
};
export const getMovieCast = async (movieId) => {
  return await axios
    .get(`${baseUrl}/movie/${movieId}/credits?api_key=${KEY}`)
    .then((response) => response.data.cast);
};
export const getReviews = async (movieId) => {
  return await axios
    .get(
      `${baseUrl}/movie/${movieId}/reviews?api_key=${KEY}&language=en-US&page=1`
    )
    .then((response) => response.data.results);
};

export const posterImgLink = "https://image.tmdb.org/t/p/w500/";
export const avatarImgLink = "https://image.tmdb.org/t/p/w138_and_h175_face/";
