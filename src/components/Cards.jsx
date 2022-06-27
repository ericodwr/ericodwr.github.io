import React from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import cryptoverse from '../assets/projects/cryptoverse.jpg';

const Cards = () => {
  return (
    <Card sx={{ maxWidth: 350 }}>
      <CardMedia
        component={'img'}
        alt="Image Projects"
        height={'50%'}
        image={cryptoverse}
      />
      <CardContent>
        <Typography component={'p'} variant="h4" gutterBottom>
          Text Some
        </Typography>
        <Typography variant="body2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore enim,
          praesentium distinctio hic ex, quos dolore nihil quaerat corrupti nam
          aliquam beatae illum fugiat quae libero iure cum eum animi?
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'space-around' }}>
        <Button size="small">Repository</Button>
        <Button size="small">Preview</Button>
      </CardActions>
    </Card>
  );
};

export default Cards;
