import '@csstools/normalize.css';
import 'Css/my_preset.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Box } from './components/Box/Box.jsx';
import App from './components/App/App.jsx';
import { ThemeProvider } from 'styled-components';
import { theme } from './constants/theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="goit-react-hw-05-movies">
      <ThemeProvider theme={theme}>
        <Box
          bg="backGroundColor"
          // display="flex"
          // flexDirection="column"
          // alignItems="end"
          height="100vh"
          // justifyContent="center"
        >
          <App />
        </Box>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
