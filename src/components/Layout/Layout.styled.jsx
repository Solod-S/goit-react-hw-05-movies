import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const LinkNav = styled(NavLink)`
  text-decoration: none;
  font-weight: 700;
  /* padding: 20px; */
  color: ${p => p.theme.colors.primaryText};
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${p => p.theme.colors.secondaryText};
  }
  &.active {
    color: red;
  }
`;

export const Header = styled.header`
  height: 60px;

  background-color: ${p => p.theme.colors.secondaryBackGroundColor};
`;

export const Nav = styled.nav`
  display: flex;
  align-items: baseline;
  justify-content: center;
`;
