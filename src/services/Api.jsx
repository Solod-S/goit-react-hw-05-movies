import axios from 'axios';
const options = {
  api_key: 'bef35a6880b17319422124db5bc1d407',
  query: '',
  include_adult: false,
};

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
export const fetchTrendingMovies = async () => {
  const response = await axios.get('/trending/movie/day', { params: options });

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
  return response;
};

export const fetchMovieDetail = async movieId => {
  const response = await axios.get(`/movie/${movieId}}`, {
    params: {
      api_key: 'bef35a6880b17319422124db5bc1d407',
    },
  });
  return response.data;
};

export const fetchMovieCast = async movieId => {
  const response = await axios.get(`/movie/${movieId}/credits`, {
    params: {
      api_key: 'bef35a6880b17319422124db5bc1d407',
    },
  });
  return response.data;
};

export const fetchMovieReviews = async movieId => {
  const response = await axios.get(`/movie/${movieId}/reviews`, {
    params: {
      api_key: 'bef35a6880b17319422124db5bc1d407',
    },
  });
  return response.data;
};
