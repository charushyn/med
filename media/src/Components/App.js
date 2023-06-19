import * as React from 'react';
import Box from '@mui/material/Box';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HeaderMain from './HeaderMain';
import MainNavigation from './MainNavigation';
import MainPage from './Pages/MainPage';
import WeatherPage from './Pages/WeatherPage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route index path='/' element={<MainPage></MainPage>}></Route>
      <Route path='/weather' element={<WeatherPage/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
