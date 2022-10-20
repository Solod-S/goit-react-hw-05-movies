import { Suspense } from 'react';
import { Box } from 'components/Box/Box';
import { Outlet, Link } from 'react-router-dom';
import { Header, LinkNav, Nav } from './Layout.styled';

const Layout = () => {
  return (
    <Header>
      <Nav>
        <LinkNav to="/">Home</LinkNav>
        <LinkNav to="/movies">Movies</LinkNav>
      </Nav>
    </Header>
  );
};

export default Layout;

// const Layout = () => {
//   <Box m="0 auto" p="0 15px" maxWidth="1300px">
//     <StyledHeader>
//       <StyledNav>
//         <StyledLink to="/">Home</StyledLink>
//         <StyledLink to="/movies">Movies</StyledLink>
//       </StyledNav>
//     </StyledHeader>

//     {/* <Suspense fallback={<div>Loading page...</div>}>
//       <Outlet />
//     </Suspense> */}
//   </Box>;
// };

// export default Layout;
