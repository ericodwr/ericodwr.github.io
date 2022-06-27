import React, { useState } from 'react';

import MenuIcon from '@mui/icons-material/Menu';

import {
  AppBar,
  Typography,
  Box,
  Toolbar,
  IconButton,
  Menu,
  Container,
  Button,
  MenuItem,
  useScrollTrigger,
  Slide,
} from '@mui/material';

const HideOnScroll = (props) => {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

const route = [
  { name: 'Home', routes: '#home' },
  { name: 'About', routes: '#about' },
  { name: 'Projects', routes: '#projects' },
];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <HideOnScroll>
      <AppBar>
        <Box bgcolor={'#AD8B73'}>
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Typography
                ml={3}
                variant="h6"
                noWrap
                color={'white'}
                sx={{
                  mr: 2,
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  textDecoration: 'none',
                  flexGrow: 1,
                  color: 'white',
                }}
              >
                <a href="#home" style={{ color: 'white' }}>
                  Ercdwr
                </a>
              </Typography>

              {/* Navbar Content on SMall Screen */}
              <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon fontSize="xl" />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: 'block', md: 'none' },
                  }}
                >
                  {/* Navbar Content on Small Screen */}
                  {route.map(({ name, routes }, i) => (
                    <MenuItem onClick={handleCloseNavMenu} key={i}>
                      <Typography textAlign="center">
                        <a style={{ color: 'black' }} href={routes}>
                          {name}
                        </a>
                      </Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>

              {/* Navbar Content on Wide Screen */}
              <Box mr={3} sx={{ display: { xs: 'none', md: 'flex' } }}>
                {route.map(({ name, routes }, i) => (
                  <Box mx={2} key={i}>
                    <a href={routes}>
                      <Button
                        onClick={handleCloseNavMenu}
                        sx={{ my: 2, color: 'white', display: 'block' }}
                        variant={'text'}
                      >
                        {name}
                      </Button>
                    </a>
                  </Box>
                ))}
              </Box>
            </Toolbar>
          </Container>
        </Box>
      </AppBar>
    </HideOnScroll>
  );
};

export default Navbar;
