const API_KEY = '48d2c8a9acaa2f8f9857e0a6b04a5442'

export const API = {
  popular: page =>
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`,

  topRated: page =>
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=${page}`,

  upcoming: page =>
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=${page}`,

  details: id =>
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`,

  cast: id =>
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`,

  search: (query, page = 1) =>
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=${page}`,
}

export const IMG_URL = 'https://image.tmdb.org/t/p/w500'
