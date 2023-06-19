import { Button } from '@mui/material';
import * as React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import { Link } from 'react-router-dom';


function ButtonToWeather() {
  return (
    <Button variant='outlined' sx={{
        width: 'fit-content',
        margin: '0 auto',
        display: 'flex',
        gap: '4px'}}>
        <Link style={{textDecoration: 'none', color: '#2b74d9'}} to={'/weather'}>Weather</Link>
        <ArrowForwardIcon></ArrowForwardIcon>
    </Button>
  );
}

export default ButtonToWeather;