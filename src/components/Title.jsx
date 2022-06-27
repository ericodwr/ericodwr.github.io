import React from 'react';

import Typography from '@mui/material/Typography';

const Title = ({ title, subTitle, small }) => {
  return (
    <>
      <Typography
        variant={small ? 'h5' : 'h4'}
        component={'h1'}
        letterSpacing={small ? 1 : 2}
        textAlign="center"
        pt={5}
        textTransform="uppercase"
        gutterBottom
      >
        {title}
      </Typography>
      {subTitle && (
        <Typography
          variant="h6"
          component={'h2'}
          letterSpacing={1}
          textAlign="center"
          gutterBottom
        >
          {subTitle}
        </Typography>
      )}
    </>
  );
};

export default Title;
