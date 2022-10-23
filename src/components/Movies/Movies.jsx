import React from 'react';
import PropTypes from 'prop-types';
import {
  MoviesListWrapper,
  MoviesList,
  MoviesLink,
  MoviesImage,
  MoviesImageWrapper,
  MoviesContentWrapper,
  MoviesRating,
  IMDBicon,
} from './Movies.styled';
import { useLocation } from 'react-router-dom';
const Movies = ({ movies }) => {
  const location = useLocation();
  return (
    <MoviesListWrapper>
      <MoviesList>
        {movies.map(({ id, poster, title, vote_average }) => (
          <li key={id}>
            <MoviesLink to={`/movies/${id}`} state={{ from: location }}>
              <MoviesImageWrapper>
                <MoviesImage src={poster} alt={title} />
              </MoviesImageWrapper>
              <MoviesContentWrapper>
                <h1>{title}</h1>
                <MoviesRating movieRating={Math.round(vote_average)}>
                  <IMDBicon size={22} /> {Math.round(vote_average)}
                </MoviesRating>
              </MoviesContentWrapper>
            </MoviesLink>
          </li>
        ))}
      </MoviesList>
    </MoviesListWrapper>
  );
};
export default Movies;
Movies.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      poster: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      vote_average: PropTypes.number.isRequired,
    })
  ).isRequired,
};
