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

const Movies = ({ movies }) => {
  console.log(`in movies`, movies);
  return (
    <MoviesListWrapper>
      <MoviesList>
        {movies.map(movie => (
          <li key={movie.id}>
            <MoviesLink>
              <MoviesImageWrapper>
                <MoviesImage src={movie.poster} alt={movie.title} />
              </MoviesImageWrapper>
              <MoviesContentWrapper>
                <h1>{movie.title}</h1>
                <MoviesRating movieRating={Math.round(movie.vote_average)}>
                  <IMDBicon size={22} /> {Math.round(movie.vote_average)}
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
