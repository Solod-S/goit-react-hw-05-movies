import { Outlet } from 'react-router-dom';
import { Header, LinkNav, Navigation } from './Layout.styled';
import { Suspense } from 'react';
const Layout = () => {
  return (
    <>
      <Header>
        <Navigation>
          {/* <LinkNav exact to="/">
            Home
          </LinkNav> */}
          <LinkNav end={true} to="/" exact>
            Homepage
          </LinkNav>
          <LinkNav to="/movies">Movies</LinkNav>
        </Navigation>
      </Header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
