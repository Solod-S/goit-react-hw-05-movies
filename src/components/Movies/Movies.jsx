import React from 'react';
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
