// import { Suspense } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Header, LinkNav, Nav } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <Header>
        <Nav>
          <LinkNav to="/">Home</LinkNav>
          <LinkNav to="/movies">Movies</LinkNav>
        </Nav>
      </Header>
      <Outlet />
    </>
  );
};

export default Layout;
