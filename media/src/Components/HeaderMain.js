import * as React from 'react';
import Box from '@mui/material/Box';

import ButtonAuth from './ButtonAuth';

function HeaderMain() {
  return (
    <Box sx={{
      display: "grid",
      gridRow: '1/2',
      gridColumn: '1/4',
      gridTemplateColumns: 'repeat(3, 1fr)',
      borderBottom: '1px solid #d1d1d1'}}>
        <ButtonAuth></ButtonAuth>
      </Box>
  );
}

export default HeaderMain;