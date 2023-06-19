import * as React from 'react';
import { FormControl, TextField, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';



function Form() {
  return (
    <FormControl sx={{
      gridRow: '1/2',
      gridColumn: '1/3',
      display: 'flex',
      flexDirection: 'row',
    }}>
        <TextField id="outlined-basic" label="Find Your City!" variant="outlined" sx={{width: '95%', height: '100%'}}/>
        <Button variant='outlined' sx={{width: '1%', height: '100%'}}>
          <SearchIcon></SearchIcon>
        </Button>
    </FormControl>
  );
}

export default Form;