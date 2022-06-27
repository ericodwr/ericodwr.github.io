import React, { useEffect } from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

import GitHubIcon from '@mui/icons-material/GitHub';
import InputIcon from '@mui/icons-material/Input';

import { useAnimation } from 'framer-motion';

import HoverHelper from './HoverHelper';

const Project = ({
  left,
  imageProject,
  title,
  description,
  demo,
  code,
  isOnView,
}) => {
  const animation = useAnimation();

  useEffect(() => {
    if (isOnView) {
      animation.start({
        x: 0,
        transition: {
          duration: 1.5,
        },
      });
    }
    if (!isOnView) {
      animation.start({
        x: left ? -900 : 900,
      });
    }
  }, [isOnView, animation, left]);

  if (left) {
    return (
      <HoverHelper small animate={animation}>
        <Container maxWidth="xl" sx={{ marginTop: 5 }}>
          <Box
            display={'flex'}
            justifyContent="space-between"
            mx={5}
            gap={5}
            mb={10}
            sx={{
              flexDirection: {
                sm: 'column',
                xs: 'column',
                md: 'row',
                xl: 'row',
              },
            }}
          >
            {/* Images */}
            <Box flex={1}>
              <img
                src={imageProject}
                style={{
                  width: '100%',
                  borderRadius: '15px',
                  boxShadow: '2px 2px 10px gray',
                }}
                alt="crypto"
              />
            </Box>
            {/* Description */}
            <Box flex={1} display="flex" flexDirection={'column'}>
              <Box flex={1}>
                <Typography gutterBottom variant="h4" component={'h2'}>
                  {title}
                </Typography>
                <Typography
                  variant={'body1'}
                  component={'p'}
                  textAlign={'justify'}
                >
                  {description}
                </Typography>
              </Box>

              {/* Button */}
              <Box
                justifyContent={'space-evenly'}
                display="flex"
                sx={{ marginTop: { md: 3, sm: 3, xs: 3 } }}
              >
                <Button color="inherit">
                  <a href={code} target="_blank" rel="noreferrer">
                    <Box
                      display="flex"
                      flexDirection={'column'}
                      justifyContent="center"
                      alignItems={'center'}
                      color="black"
                    >
                      <GitHubIcon />
                      Source Code
                    </Box>
                  </a>
                </Button>
                <Button color="inherit">
                  <a href={demo} target="_blank" rel="noreferrer">
                    <Box
                      display="flex"
                      flexDirection={'column'}
                      justifyContent="center"
                      alignItems={'center'}
                      color="black"
                    >
                      <InputIcon />
                      Live Demo
                    </Box>
                  </a>
                </Button>
              </Box>
            </Box>
          </Box>
        </Container>
      </HoverHelper>
    );
  }

  return (
    <HoverHelper small animate={animation}>
      <Container maxWidth="xl" sx={{ marginTop: 5 }}>
        <Box
          display={'flex'}
          justifyContent="space-between"
          sx={{
            flexDirection: {
              sm: 'column-reverse',
              xs: 'column-reverse',
              md: 'row',
              xl: 'row',
            },
          }}
          mx={5}
          gap={5}
          mb={10}
        >
          {/* Description */}
          <Box flex={1} display="flex" flexDirection={'column'}>
            <Box flex={1}>
              <Typography gutterBottom variant="h4" component={'h2'}>
                {title}
              </Typography>
              <Typography
                variant={'body1'}
                component={'p'}
                textAlign={'justify'}
              >
                {description}
              </Typography>
            </Box>

            {/* Button */}
            <Box
              justifyContent={'space-evenly'}
              display="flex"
              sx={{ marginTop: { md: 3, sm: 3, xs: 3 } }}
            >
              <Button color="inherit">
                <a href={code} target="_blank" rel="noreferrer">
                  <Box
                    display="flex"
                    flexDirection={'column'}
                    justifyContent="center"
                    alignItems={'center'}
                    color="black"
                  >
                    <GitHubIcon />
                    Source Code
                  </Box>
                </a>
              </Button>
              <Button color="inherit">
                <a href={demo} target="_blank" rel="noreferrer">
                  <Box
                    display="flex"
                    flexDirection={'column'}
                    justifyContent="center"
                    color="black"
                    alignItems={'center'}
                  >
                    <InputIcon />
                    Live Demo
                  </Box>
                </a>
              </Button>
            </Box>
          </Box>
          {/* Images */}
          <Box flex={1}>
            <img
              src={imageProject}
              style={{
                width: '100%',
                borderRadius: '15px',
                boxShadow: '2px 2px 10px gray',
              }}
              alt="crypto"
            />
          </Box>
        </Box>
      </Container>
    </HoverHelper>
  );
};

export default Project;
