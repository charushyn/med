import * as React from 'react';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

import ButtonAuth from '../ButtonAuth';
import { Button } from '@mui/material';

function HeaderWeather() {
  return (
    <Box sx={{
      display: "grid",
      gridTemplateRows: '100px 1fr',
      gridTemplateColumns: 'repeat(3, 1fr)',
      borderBottom: '1px solid #d1d1d1'}}>
        <Button variant='contained' sx={{
            width: '100px',
            height: '40px',
            display: 'flex',
            alignSelf: 'center',
            marginLeft: '30px',
        }}>
            <Link style={{
                textDecoration: 'none',
                color: 'white',}} to='/'>return</Link>
        </Button>
        <ButtonAuth></ButtonAuth>
      </Box>
  );
}

export default HeaderWeather;