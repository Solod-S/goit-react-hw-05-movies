import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const GoBackLink = styled(NavLink)`
  display: inline-block;
  margin-bottom: ${p => p.theme.space[3]}px;
  color: ${p => p.theme.colors.primaryText};
  padding: ${p => p.theme.space[4]}px;
  border-radius: ${p => p.theme.radii.normal};
  text-decoration: none;
  font-weight: 700;
  font-family: ${p => p.theme.fonts.btn};
  font-size: ${p => p.theme.fontSizes.m};

  transition: color 0.25s, background-color 0.25s;

  &:hover {
    color: ${p => p.theme.colors.secondaryText};
    background-color: ${p => p.theme.colors.thrdBackGroundColor};
  }
  &.active {
    color: ${p => p.theme.colors.secondaryText};

    background-color: ${p => p.theme.colors.thrdBackGroundColor};
  }
`;
export const PageWrapper = styled.div`
  position: relative;
  padding-top: 70px;
  background-image: linear-gradient(
      to bottom,
      rgba(26, 26, 26, 0.1) 10%,
      rgba(26, 26, 26, 0.5) 66%,
      rgba(26, 26, 26, 1) 100%
    ),
    url(${p => p.backGroundImg});

  content: '';
  background-size: cover;
  background-repeat: no-repeat;
`;
export const Poster = styled.img`
  border-radius: ${p => p.theme.radii.normal};
  display: block;
  margin-right: 80px;
`;
export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  padding: ${p => p.theme.space[4]}px;
  margin-bottom: 20px;
  cursor: pointer;
  width: 90px;
  text-decoration: none;
  border: none;
  border-radius: 10px;
  background-color: #9c9efc;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.05);
    background-color: #1e489c;
    color: ${p => p.theme.colors.secondaryText};
  }
`;

export const LinkNav = styled(NavLink)`
  display: inline-block;
  color: ${p => p.theme.colors.primaryText};
  padding: ${p => p.theme.space[4]}px;
  border-radius: ${p => p.theme.radii.normal};
  text-decoration: none;
  font-weight: 700;
  font-family: ${p => p.theme.fonts.btn};
  font-size: ${p => p.theme.fontSizes.m};

  transition: color 0.25s, background-color 0.25s;
  &:not(:last-child) {
    margin-right: ${p => p.theme.space[2]}px;
  }
  &:hover {
    color: ${p => p.theme.colors.secondaryText};
    background-color: ${p => p.theme.colors.thrdBackGroundColor};
  }
  &.active {
    color: ${p => p.theme.colors.secondaryText};

    background-color: ${p => p.theme.colors.thrdBackGroundColor};
  }
`;

export const GeneralTitle = styled.h1`
  color: ${p => p.theme.colors.secondaryText};
  margin-bottom: 20px;
`;

export const CommonTitle = styled.h3`
  color: ${p => p.theme.colors.secondaryText};
  margin-bottom: 15px;
`;

export const Title = styled.h4`
  color: ${p => p.theme.colors.secondaryText};
  margin-bottom: 10px;
`;
export const Text = styled.p`
  :not(:last-child) {
    margin-bottom: 10px;
  }
`;
export const List = styled.ul`
  display: flex;
`;
export const Item = styled.li`
  :not(:last-child) {
    margin-right: 10px;
  }
  list-style: none;
`;
