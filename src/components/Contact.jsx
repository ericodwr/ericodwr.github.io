import React from 'react';

import { motion } from 'framer-motion';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

import HoverHelper from './HoverHelper';

const media = [
  {
    href: 'https://www.instagram.com/ericodwr/',
    icon: (
      <InstagramIcon
        sx={{
          fontSize: { xl: '3rem', md: '3rem', sm: '2.5rem', xs: '1.7rem' },
          color: 'black',
        }}
      />
    ),
  },
  {
    href: 'https://wa.me/6282117690935',
    icon: (
      <WhatsAppIcon
        sx={{
          fontSize: { xl: '3rem', md: '3rem', sm: '2.5rem', xs: '1.7rem' },
          color: 'black',
        }}
      />
    ),
  },
  {
    href: 'https://www.linkedin.com/in/ericodwir/',
    icon: (
      <LinkedInIcon
        sx={{
          fontSize: { xl: '3rem', md: '3rem', sm: '2.5rem', xs: '1.7rem' },
          color: 'black',
        }}
      />
    ),
  },
  {
    href: 'https://github.com/ericodwr',
    icon: (
      <GitHubIcon
        sx={{
          fontSize: { xl: '3rem', md: '3rem', sm: '2.5rem', xs: '1.7rem' },
          color: 'black',
        }}
      />
    ),
  },
];

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <Container maxWidth="xl">
        <Box
          display={'flex'}
          minHeight="30vh"
          alignItems={'center'}
          px={6}
          sx={{
            flexDirection: { md: 'row', sm: 'column', xs: 'column' },
            alignItems: { md: 'center', sm: 'start', xs: 'start' },
            fontSize: { md: '0.5rem', sm: '0.5rem' },
            justifyContent: {
              md: 'space-between',
              xl: 'space-between',
              sm: 'center',
              xs: 'center',
            },
          }}
        >
          {/* Email */}
          <Box>
            <Typography
              component={'h4'}
              variant="h6"
              sx={{
                fontSize: {
                  md: '1.5rem',
                  sm: '1.5rem',
                  xl: '2rem',
                  xs: '1rem',
                },
              }}
            >
              Let's Work Together
            </Typography>
            <Typography
              component={'h2'}
              variant="h4"
              sx={{
                fontSize: {
                  md: '1.5rem',
                  sm: '1.8rem',
                  xl: '2rem',
                  xs: '1rem',
                },
              }}
            >
              <HoverHelper small>
                <a className="email" href="mailto:erikodwirosadi12@gmail.com">
                  erikodwirosadi12@gmail.com
                </a>
              </HoverHelper>
            </Typography>
          </Box>

          {/* Contact */}
          <Box
            display={'flex'}
            alignItems="center"
            sx={{ marginTop: { sm: '2rem', xs: '2rem', md: '0', xl: '0' } }}
          >
            {media.map((mediaLink, i) => (
              <HoverHelper clicked key={i}>
                <Button
                  sx={{
                    margin: {
                      sm: '0 1rem 0 0',
                      md: '0 2rem',
                      xl: '0 2rem',
                      xs: '0 -0.8rem',
                    },
                  }}
                >
                  <a href={mediaLink.href} target={'_blank'} rel={'noreferrer'}>
                    {mediaLink.icon}
                  </a>
                </Button>
              </HoverHelper>
            ))}
          </Box>
        </Box>
      </Container>
    </motion.div>
  );
};

export default Contact;
