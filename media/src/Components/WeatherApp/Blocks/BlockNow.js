import * as React from 'react';
import { Box, Typography } from '@mui/material';
import NavigationWeather from '../NavigationWeather';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


function BlockNow() {
  return (
    <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        gridRow: '2/3',
        gridColumn: '1/2',
        padding: '20px',
    }}>
        <Typography variant='h2'>Aktobe</Typography>
        <img src='https://cdn1.iconfinder.com/data/icons/material-core/24/cloud-512.png' style={{
            width: '120px',
            height: '120px',
            margin: '70px auto'
        }}></img>
        <Typography variant='h2'>13°С</Typography>
    </Box>
  );
}

export default BlockNow;