import React, { useState } from 'react';
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

function Searchbar({ setSearchMovies }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubeventmit = event => {
    event.preventDefault();
    const searcForm = event.currentTarget;
    const inputQuery = searcForm.elements.searchQuery.value;
    setSearchQuery(inputQuery);
    searcForm.reset();
  };

  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    async function fetch() {
      const videoResponse = await fetchSearchMovies(searchQuery);
      console.log(videoResponse);
      const allVideoData = videoResponse.data.results;
      console.log(allVideoData);
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
  }, [searchQuery, setSearchMovies]);

  return (
    <SearchBarWrapper>
      <SearchBarForm onSubmit={handleSubeventmit}>
        <SearchBarInput
          type="text"
          autoComplete="off"
          autoFocus
          name="searchQuery"
          //   value={searchQuery}
          //   onChange={handleNameChange}
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
