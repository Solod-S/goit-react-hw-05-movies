import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { fetchSearchMovies } from 'services/Api';
import {
  SearchBarHeader,
  SearchBarForm,
  SearchBarButton,
  SearchBarInput,
  SearchBarLogo,
  SearchBarLinkLogo,
} from './Searchbar.styled';
import { IoIosSearch } from 'react-icons/io';
import logo from '../../img/Pixabay-logo.png';

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

      console.log(videoData);

      setSearchMovies(videoData);
    }

    try {
      fetch();
    } catch (error) {
      console.log(error, `Попробуйте перезагрузить страницу`);
    }
  }, [searchQuery, setSearchMovies]);

  return (
    <>
      <SearchBarForm onSubmit={handleSubeventmit}>
        <SearchBarInput
          type="text"
          autoComplete="off"
          autoFocus
          name="searchQuery"
          //   value={searchQuery}
          //   onChange={handleNameChange}
          placeholder="Search images and photos"
        />
        <SearchBarButton type="submit">
          <IoIosSearch size={18} fill="#444444" />
        </SearchBarButton>
      </SearchBarForm>
    </>
  );
}

Searchbar.propTypes = {
  setSearchMovies: PropTypes.func.isRequired,
};
export default Searchbar;
