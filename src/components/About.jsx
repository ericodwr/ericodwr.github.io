import React from 'react';

import { Box, Typography, Container } from '@mui/material';
import { motion } from 'framer-motion';

import Title from './Title';

import image from '../assets/me.jpg';
import Skillsets from './Skillsets';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      id="about"
    >
      <Container maxWidth="xl">
        <Box minHeight="100vh">
          {/* About Me */}
          <Title title={'About Me'} />
          {/* About Me Personally */}
          <Box
            mt={4}
            sx={{ display: { sm: 'column', md: 'flex', xl: 'flex' } }}
            justifyContent="space-around"
            alignItems={'center'}
            mx={3}
          >
            <Box
              flex={1}
              display="flex"
              justifyContent={'center'}
              alignItems="start"
            >
              <img className="img" src={image} alt="me" />
            </Box>
            <Box
              flex={1.5}
              sx={{ marginTop: { xl: '0', sm: '2rem', xs: '2rem' } }}
            >
              <Typography
                sx={{ fontSize: { sm: '1.2rem', xs: '0.9rem' } }}
                mb={3}
                component={'h2'}
                variant="h6"
                textAlign={'justify'}
              >
                My name Erico Dwi Rosadi, you can call me Erico, I am
                self-taught Front End Developer from Indonesia and specialize in
                Javascript, React Js. Currently Undergraduate at UPN Veteran
                Jakarta Majoring Information Systems. Rapid learner who eager to
                grow as a developer. I am flexible person who can communicate
                and adapt easily with others, i am looking for new experience
                and oppoturnities to expand my knowledge and my relation.
              </Typography>
              <Typography
                sx={{ fontSize: { sm: '1.2rem', xs: '0.9rem' } }}
                component={'h2'}
                variant="h6"
                textAlign={'justify'}
              >
                currently i am mastering my front end skills and learning more
                about back end. I am looking forward for more developer skills
                such as Full Stack Developer, Software Developer, Mobile App
                Developer, etc. I love learning new things especially about
                tech.
              </Typography>
            </Box>
          </Box>

          {/* Skillset */}
          <Skillsets />
        </Box>
      </Container>
    </motion.div>
  );
};

export default About;
