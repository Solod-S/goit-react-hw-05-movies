import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Item, Title, Description, NoReviews } from './Reviews.styled';
import { Box } from 'components/Box/Box';

import { fetchMovieReviews } from 'services/Api';

const Reviews = () => {
  const { movieId } = useParams();
  const [review, setReview] = useState([]);

  useEffect(() => {
    async function gethMovieCast() {
      await fetchMovieReviews(movieId).then(data => setReview(data.results));
    }
    gethMovieCast();
  }, [movieId]);

  return (
    <>
      {review.length > 0 ? (
        <Box
          as="ul"
          display="flex"
          flexDirection="column"
          gridGap={3}
          color="white"
          maxWidth="1300px"
          m="auto"
        >
          {review.map(({ id, author, content, created_at }) => (
            <Item key={id}>
              <Title>Author:</Title>
              <Description>{author}</Description>
              <Title>Comment:</Title>

              <Description>{content}</Description>
              <Title>Created:</Title>
              <Description>
                {new Date(created_at).toLocaleDateString('en-US')}
              </Description>
            </Item>
          ))}
        </Box>
      ) : (
        <NoReviews>No reviews</NoReviews>
      )}
    </>
  );
};

export default Reviews;
