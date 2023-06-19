import { Box } from '@mui/material';
import * as React from 'react';
import HeaderWeather from '../WeatherApp/HeaderWeather';
import WeatherApp from '../WeatherApp/WeatherApp';


function WeatherPage() {
  return (
    <Box sx={{
        width: '100%',
        height: '1080px'}}>
        <HeaderWeather></HeaderWeather>
        <WeatherApp></WeatherApp>
    </Box>
  );
}

export default WeatherPage;