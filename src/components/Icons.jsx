import React from 'react';

import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';

import HoverHelper from './HoverHelper';

const Icons = ({ icons }) => {
  if (!icons) {
    return <h1>Nothing icon</h1>;
  }

  return (
    <>
      <Box display={'flex'} justifyContent="center" pt={5}>
        {icons.map((icon, i) => (
          <HoverHelper key={i}>
            <Box sx={{ mx: { xl: 5, sm: 3, md: 5, xs: 1.2 } }}>
              <Avatar
                alt="jsicons"
                src={icon}
                variant="square"
                sx={{
                  width: { xl: 60, sm: 50, xs: 35 },
                  height: { xl: 60, sm: 50, xs: 35 },
                }}
              />
            </Box>
          </HoverHelper>
        ))}
      </Box>
    </>
  );
};

export default Icons;
