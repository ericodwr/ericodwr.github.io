import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { ThemeProvider, createTheme } from '@mui/material/styles';

import './styles.css';

const theme = createTheme({
  typography: {
    fontFamily: 'Roboto Slab, serif',
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root'),
);
