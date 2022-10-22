import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { SiImdb } from 'react-icons/si';

export const IMDBicon = styled(SiImdb)`
  margin-right: ${p => p.theme.space[2]}px; ;
`;
export const MoviesListWrapper = styled.div`
  max-width: 1300px;
  display: flex;
  flex-direction: column;

  margin-left: auto;
  margin-right: auto;
`;

export const MoviesList = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: ${p => p.theme.space[4]}px;
`;
export const MoviesLink = styled(NavLink)`
  position: relative;
  display: block;
  height: 100%;
  border-radius: ${p => p.theme.radii.normal};
  overflow: hidden;
  background-color: ${p => p.theme.colors.secondaryBackGroundColor};
  color: ${p => p.theme.colors.secondaryText};
  box-shadow: 5px 5px 5px ${p => p.theme.colors.backGroundColor};
  transition: all 0.25s;
  &:hover {
    z-index: 2;
    transform: scale(1.05);
    box-shadow: 5px 5px 5px ${p => p.theme.colors.backGroundColor};
  }
`;

export const MoviesImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const MoviesImageWrapper = styled.div`
  display: block;
  height: 350px;
`;

export const MoviesContentWrapper = styled.div`
  padding: ${p => p.theme.space[4]}px;
`;

export const MoviesRating = styled.span`
  display: flex;

  position: absolute;
  top: 1%;
  right: 2%;
  padding: ${p => p.theme.space[3]}px;
  font-weight: 500;
  box-shadow: 5px 5px 5px ${p => p.theme.colors.backGroundColor};
  background-color: ${({ movieRating }) => {
    if (movieRating > 6) {
      return '#55ff00';
    }
    if (movieRating >= 4 && movieRating <= 6) {
      return '#ffcb2f';
    }
    return '#f00';
  }};
  border-radius: ${p => p.theme.radii.normal};

  color: ${p => p.theme.colors.backGroundColor};
`;
