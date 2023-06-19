import { Box } from '@mui/material';
import * as React from 'react';
import ButtonToSN from './ButtonToSN';
import ButtonToWeather from './ButtonToWeather';


function MainNavigation() {
  return (
    <Box sx={{
        display: 'flex',
        gap: '10px',
        marginTop: '300px',
        flexDirection: 'column',
        gridRow: '2/3',
        gridColumn: '2/3',
    }}>
        <ButtonToSN></ButtonToSN>
        <ButtonToWeather></ButtonToWeather>
    </Box>
  );
}

export default MainNavigation;