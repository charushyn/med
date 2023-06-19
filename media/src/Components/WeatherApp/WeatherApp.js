import * as React from 'react';
import { Box } from '@mui/material';

import Form from './Form';
import BlockNow from './Blocks/BlockNow';
import NavigationWeather from './NavigationWeather';
import BlockDetails from './Blocks/BlockDetails';
import BlockForecast from './Blocks/BlockForecast';


import { Route, Routes, useRouteMatch } from 'react-router-dom';


function WeatherApp() {

  const match = useRouteMatch()

return (
    <Box sx={{
      width: '1200px',
      height: '600px',
      border: '1px solid black',
      margin: '50px auto 0px auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gridTemplateRows: '50px 1fr 70px', 
    }}>
      <Form></Form>
      <Routes>
        <Route path='/weather/now' element={<BlockNow></BlockNow>}></Route>
        <Route path='/weather/details' element={<BlockDetails></BlockDetails>}></Route>
        <Route path='/forecast' element={<BlockForecast></BlockForecast>}></Route>
      </Routes>
      <NavigationWeather></NavigationWeather>
    </Box>
  );
}

export default WeatherApp;