import axios from 'axios';
const options = {
  api_key: 'bef35a6880b17319422124db5bc1d407',
  query: '',
  include_adult: false,
};
// const { key, query, include_adult } = options;
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
export const fetchTrendingMovies = async () => {
  //   const response = await axios.get(`trending/movie/day?api_ke=${key}`);
  const response = await axios.get('/trending/movie/day', { params: options });
  // return response.data.data;
  return response;
};

export const fetchSearchMovies = async query => {
  const response = await axios.get('/search/movie', {
    params: {
      api_key: 'bef35a6880b17319422124db5bc1d407',
      query,
      include_adult: false,
    },
  });
  // return response.data.data;
  return response;
};

// https://api.themoviedb.org/3/movie/550?api_key=bef35a6880b17319422124db5bc1d407

// export const getFetchTrending = async () => {
//   const response = await axios('/trending/movie/day', {
//     params: {
//       api_key: KEY,
//     },
//   });

//   return response.data.results;
// };

// export const getFetchSearchMovies = async query => {
//   const response = await axios('/search/movie', {
//     params: {
//       api_key: KEY,
//       include_adult: false,
//       query,
//     },
//   });

//   return response.data.results;
// };

// export const getFetchMovieDetails = async movieId => {
//   const response = await axios(`/movie/${movieId}`, {
//     params: {
//       api_key: KEY,
//     },
//   });

//   return response.data;
// };

// export const getFetchMovieCast = async movieId => {
//   const response = await axios(`/movie/${movieId}/credits`, {
//     params: {
//       api_key: KEY,
//     },
//   });

//   return response.data;
// };

// export const getFetchMovieReviews = async movieId => {
//   const response = await axios(`/movie/${movieId}/reviews`, {
//     params: {
//       api_key: KEY,
//     },
//   });

//   return response.data;
// };
