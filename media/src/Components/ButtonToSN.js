import { Button } from '@mui/material';
import * as React from 'react';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function ButtonToSN() {
  return (
    <Button variant='outlined' sx={{
        width: 'fit-content',
        margin: '0 auto',
        display: 'flex',
        gap: '4px'}}>
        <Link style={{textDecoration: 'none', color: '#2b74d9'}} to={'/sn'}>social network</Link>
        <ArrowForwardIcon></ArrowForwardIcon>
    </Button>
  );
}

export default ButtonToSN;