import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const LinkNav = styled(NavLink)`
  padding: ${p => p.theme.space[4]}px;
  border-radius: ${p => p.theme.radii.normal};
  text-decoration: none;
  font-weight: 700;
  font-family: ${p => p.theme.fonts.btn};
  font-size: ${p => p.theme.fontSizes.m};

  color: ${p => p.theme.colors.primaryText};
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

export const Header = styled.header`
  /* border-bottom: 1px solid ${p => p.theme.colors.secondaryText}; */
  display: flex;
  align-items: center;
  justify-content: center;
  height: 55px;

  background-color: ${p => p.theme.colors.secondaryBackGroundColor};
`;

export const Nav = styled.nav`
  display: flex;
  align-items: baseline;
  justify-content: center;
`;
