// import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { fetchSearchMovies } from 'services/Api';
import {
  SearchBarWrapper,
  SearchBarForm,
  SearchBarButton,
  SearchBarInput,
} from './Searchbar.styled';
import { IoIosSearch } from 'react-icons/io';
import { useSearchParams } from 'react-router-dom';

function Searchbar({ setSearchMovies }) {
  const [searchQuery, setSearchQuery] = useSearchParams();

  const currentQuery = searchQuery.get('query') ?? '';

  const handleSubeventmit = event => {
    event.preventDefault();
    const searcForm = event.currentTarget;
    const inputQuery = searcForm.elements.searchQuery.value;

    setSearchQuery({ query: inputQuery });
    searcForm.reset();
  };

  useEffect(() => {
    if (!currentQuery) {
      return;
    }
    async function fetch() {
      const videoResponse = await fetchSearchMovies(currentQuery);

      const allVideoData = videoResponse.data.results;

      const videoData = allVideoData.map(
        ({ id, title, poster_path: poster, vote_average }) => ({
          id,
          title,
          poster: 'https://image.tmdb.org/t/p/w500' + poster,
          vote_average,
        })
      );

      setSearchMovies(videoData);
    }

    try {
      fetch();
    } catch (error) {
      console.log(error, `Попробуйте перезагрузить страницу`);
    }
  }, [currentQuery, setSearchMovies]);

  return (
    <SearchBarWrapper>
      <SearchBarForm onSubmit={handleSubeventmit}>
        <SearchBarInput
          type="text"
          autoComplete="off"
          autoFocus
          name="searchQuery"
          placeholder="Search movies"
        />
        <SearchBarButton type="submit">
          <IoIosSearch size={18} fill="#444444" />
        </SearchBarButton>
      </SearchBarForm>
    </SearchBarWrapper>
  );
}

Searchbar.propTypes = {
  setSearchMovies: PropTypes.func.isRequired,
};
export default Searchbar;
