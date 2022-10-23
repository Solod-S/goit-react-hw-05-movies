import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { List, Item, Data, Name, Character, NoCast } from './Cast.styled';
import { Box } from 'components/Box/Box';
import { fetchMovieCast } from 'services/Api';
const defaultAvatar = 'https://i.ibb.co/GMtZdbv/avatar.jpg';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    async function gethMovieCast() {
      await fetchMovieCast(movieId).then(data => setCast(data.cast));
    }
    gethMovieCast();
  }, [movieId]);

  return (
    <>
      {cast.length > 0 ? (
        <Box color="white" maxWidth="1300px" m="auto">
          <List>
            {cast.map(({ id, profile_path, original_name, character }) => (
              <Item key={id}>
                <img
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w500` + profile_path
                      : defaultAvatar
                  }
                  alt="avatar"
                />
                <Data>
                  <Name>{original_name}</Name>
                  {character && <Character>Character: {character}</Character>}
                </Data>
              </Item>
            ))}
          </List>
        </Box>
      ) : (
        <Box color="white" maxWidth="1300px" m="auto" textAl>
          <NoCast>No cast</NoCast>
        </Box>
      )}
    </>
  );
};

export default Cast;
