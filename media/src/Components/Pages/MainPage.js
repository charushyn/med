import { Box } from '@mui/material';
import * as React from 'react';


import HeaderMain from '../HeaderMain';
import MainNavigation from '../MainNavigation';


function MainPage() {
  return (
    <Box sx={{
        width: '100%',
        display: "grid",
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridTemplateRows: '100px 1fr'
    }}>
        <HeaderMain></HeaderMain>
        <MainNavigation></MainNavigation>
    </Box>
  );
}

export default MainPage;