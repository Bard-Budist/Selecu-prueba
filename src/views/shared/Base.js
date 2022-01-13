import React from 'react';
import Box from '@mui/material/Box';
import './style.css';

const Container = ({children, ...rest}) => (
  <Box
    className='background-base'
    width='100vw'
    height='100vh'
    sx={{
      backgroundColor: 'black'
    }}
    {...rest}
  >
    {children}
  </Box>
);

export default Container;