import React, { useEffect, useState } from 'react';

import Title from './Title';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Project from './Project';
import Contact from './Contact';

import { useInView } from 'react-intersection-observer';

import cryptoverse from '../assets/projects/cryptoverse.jpg';
import realEstate from '../assets/projects/real-estate.jpg';
import crowns from '../assets/projects/crowns.jpg';

const theProjects = [
  {
    imageProject: cryptoverse,
    title: ' Cryptoverse',
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Expedita officia earum at unde quam sit harum, cupiditate quas
                rerum non atque laudantium excepturi tempora voluptatibus.
                Expedita architecto omnis corrupti, repudiandae nihil sapiente
                dolorem aspernatur doloremque natus ullam ab iste alias?`,
    left: true,
    code: 'https://github.com/ericodwr/cryptoverse',
    demo: 'https://cryptoverse-edr.netlify.app/',
  },
  {
    imageProject: realEstate,
    title: ' Real-Estate',
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Expedita officia earum at unde quam sit harum, cupiditate quas
                rerum non atque laudantium excepturi tempora voluptatibus.
                Expedita architecto omnis corrupti, repudiandae nihil sapiente
                dolorem aspernatur doloremque natus ullam ab iste alias?`,
    left: false,
    code: 'https://github.com/ericodwr/erc-real-estate',
    demo: 'https://erc-real-estate.vercel.app/',
  },
  {
    imageProject: crowns,
    title: ' Crowns',
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Expedita officia earum at unde quam sit harum, cupiditate quas
                rerum non atque laudantium excepturi tempora voluptatibus.
                Expedita architecto omnis corrupti, repudiandae nihil sapiente
                dolorem aspernatur doloremque natus ullam ab iste alias?`,
    left: true,
    code: 'https://github.com/ericodwr/crowns',
    demo: 'https://crowns-edr.netlify.app/',
  },
];

const Projects = () => {
  const [isOnView, setIsOnView] = useState(false);
  const { inView, ref } = useInView();

  useEffect(() => {
    if (inView) {
      setIsOnView(true);
    } else if (!inView) {
      setIsOnView(false);
    }
  }, [inView]);

  return (
    <div ref={ref} id="projects">
      <Box bgcolor={'#FFFBE9'} minHeight="100vh" marginTop={6}>
        <Title title={'Projects'} />
        <Typography textAlign={'center'} variant="h6" component={'h2'}>
          Here's top projects that i build recently
        </Typography>
        <Box>
          {theProjects.map((project, i) => (
            <Project isOnView={isOnView} key={i} {...project} />
          ))}
        </Box>
        <Contact />
      </Box>
    </div>
  );
};

export default Projects;
