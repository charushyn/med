import * as React from 'react';
import { Button } from '@mui/material';

function ButtonAuth() {
  return (
    <Button variant='contained' sx={{
        gridColumn: '3/4',
        width: '100px',
        height: '40px',
        display: 'flex',
        alignSelf: 'center',
        margin: '0 auto'
    }}>Login</Button>
  );
}

export default ButtonAuth;