import React from 'react';
import Navbar from './components/Navbar';

import { Home, Projects, About, Footer } from './components';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const App = () => {
  return (
    <>
      <Container maxWidth="xl" sx={{ backgroundColor: '#FFFBE9' }}>
        <Box sx={{ fontFamily: 'Roboto Slab' }}>
          <Navbar />
          <Home />
          <About />
          <Projects />
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default App;
