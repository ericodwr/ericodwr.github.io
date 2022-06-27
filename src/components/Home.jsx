import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import BackgroundAnimation from './BackgrooundAnimation/BackgroundAnimation';

const Home = () => {
  return (
    <>
      <div id="home">
        <Box
          className="home"
          bgcolor={'#FFFBE9'}
          display={'flex'}
          alignItems={'center'}
          justifyContent={'center'}
          sx={{
            minHeight: '100vh',
          }}
        >
          <Box>
            <Box>
              <Typography variant="h6" components="p">
                Hi, I am
              </Typography>
              <Typography
                sx={{
                  fontSize: {
                    md: '2rem',
                    sm: '2rem',
                    xs: '1.9rem',
                    xl: '2.5rem',
                  },
                }}
                variant="h2"
                components="h1"
                textTransform={'uppercase'}
                letterSpacing={2}
                gutterBottom
              >
                Erico Dwi Rosadi
              </Typography>
              <Typography variant="h6" components="h4" >
                Front End Developer
              </Typography>
            </Box>
          </Box>

          {/* right section */}
          <Box
            zIndex={0}
            position={'absolute'}
            sx={{ width: { xs: '100%', md: '50%' } }}
          >
            <BackgroundAnimation />
          </Box>
        </Box>
      </div>
    </>
  );
};

export default Home;
