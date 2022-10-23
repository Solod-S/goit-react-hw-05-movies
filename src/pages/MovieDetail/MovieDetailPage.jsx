import { fetchMovieDetail } from 'services/Api';
import { useState, useEffect } from 'react';

import { Box } from 'components/Box/Box';
import { useLocation, Outlet, useParams } from 'react-router-dom';
import { Suspense } from 'react';

import {
  PageWrapper,
  Poster,
  GoBackLink,
  LinkNav,
  Title,
  CommonTitle,
  GeneralTitle,
  Text,
  Item,
  List,
} from './MovieDetailPage.styled';
const MovieDetailPage = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';

  const { movieId } = useParams();
  // возвращает (<Route path=":movieId" +  <NavItem to={`${id}`}>) === {movieId: "5554444"}
  const [movieData, setmovieData] = useState(null);
  useEffect(() => {
    fetchMovieDetail(movieId).then(setmovieData);
  }, [movieId]);

  if (!movieData) {
    return;
  }
  const { backdrop_path, poster_path, title, overview, genres, vote_average } =
    movieData;
  return (
    <>
      <PageWrapper
        backGroundImg={'https://image.tmdb.org/t/p/w500' + backdrop_path}
      >
        <Box color="white" maxWidth="1300px" m="auto" mb="20px">
          <GoBackLink end="true" to={backLinkHref}>
            Go back
          </GoBackLink>
          <Box display="flex">
            <Poster
              src={'https://image.tmdb.org/t/p/w500' + poster_path}
              alt={title}
              width="300"
            />

            <Box p={10}>
              <GeneralTitle>{title}</GeneralTitle>
              <CommonTitle>Overview</CommonTitle>
              <Text>{overview}</Text>
              <Title>Genres:</Title>
              <Text>{genres.map(({ name }) => name).join(', ')}</Text>
              <Title>User score:</Title>
              <Text>{(vote_average * 10).toFixed(1)}%</Text>
            </Box>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="20px"
          >
            <Title>Additional information</Title>
            <List>
              <Item>
                <LinkNav to="cast" state={{ from: backLinkHref }}>
                  Cast
                </LinkNav>
              </Item>
              <Item>
                <LinkNav to="reviews" state={{ from: backLinkHref }}>
                  Reviews
                </LinkNav>
              </Item>
            </List>
          </Box>
        </Box>
      </PageWrapper>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
export default MovieDetailPage;
