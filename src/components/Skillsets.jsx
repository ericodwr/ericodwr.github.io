import React from 'react';

import Icons from './Icons';
import Title from './Title';

import Box from '@mui/material/Box';

import js from '../assets/icons/js.svg';
import css from '../assets/icons/css.svg';
import html from '../assets/icons/html.svg';
import node from '../assets/icons/node.svg';
import react from '../assets/icons/react.svg';

const icons = [js, css, html, node, react];

const Skillsets = () => {
  return (
    <Box>
      <Title title={'Skills that i obtain presently'} small />
      <Icons icons={icons} />
    </Box>
  );
};

export default Skillsets;
