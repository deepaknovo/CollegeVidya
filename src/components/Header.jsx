import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Header = () => (
  <AppBar position="static" color="primary">
    <Toolbar>
      <Typography variant="h6">Online MBA Comparison</Typography>
    </Toolbar>
  </AppBar>
);
export default Header;
