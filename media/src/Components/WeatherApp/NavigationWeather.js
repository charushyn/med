import { Box, Button } from '@mui/material';
import * as React from 'react';
import { Link } from 'react-router-dom';


function NavigationWeather() {
  return (
    <Box sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridRow: '3/4',
        gridColumn: '1/2',

    }}>
        <Button variant='outlined' sx={{gridColumn: '1/2'}}>
          <Link to='/weather/now' style={{textDecoration: 'none', color: '#2b74d9'}}>Now</Link>
          </Button>
        <Button variant='outlined' sx={{gridColumn: '2/3'}}>
          <Link to='/weather/details' style={{textDecoration: 'none', color: '#2b74d9'}}>Details</Link>
        </Button>
        <Button variant='outlined' sx={{gridColumn: '3/4'}}>
          <Link to='/weather/forecast' style={{textDecoration: 'none', color: '#2b74d9'}}>Forecast</Link>
        </Button>
    </Box>
  );
}

export default NavigationWeather;