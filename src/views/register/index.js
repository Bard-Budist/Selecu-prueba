import React from 'react';
import Box from '@mui/material/Box';
import { alpha, styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Container from '../shared/Base';
import { createTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { Button, InputLabel } from '@mui/material';

const Register = (props) => {

  const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
      color: 'white',
    },
    '& .MuiTextField-root': {
      width: '100%',
    },
    '& label': {
      color: 'white',
    },
    '& input': {
      color: 'white',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'white',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#289FED',
      },
      '&:hover fieldset': {
        borderColor: 'white',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'white',
      },
    },
  });

  const theme = createTheme({
    palette: {
      text:{
        light: '#FFFF',
      }
    },
  });

  return(
    <Container
      display='flex'
    >
      <Box
        display=''
        height='400px'
        width='350px'
        sx={{
          backgroundColor: '#080721',
          borderRadius: 5,
          boxShadow: '5px 5px 0px 0px #289FED, 5px 5px 15px 5px rgba(0,0,0,0)',
          zIndex: 9,
          margin: 'auto',
        }}
      >
        <Grid container textAlign='center'>
          <Grid
            item
            xs={12}
            sx={{
              marginBottom: 5
            }}
          >
            <Typography variant='h3' letterSpacing='0.1em' color={theme.palette.text.light} align='center'>
              Registrate
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            mb={12}
            sx={{
              marginBottom: 3
            }}
          >
            <CssTextField
              variant='outlined'
              size='small'
              label='Ingresa tu nombre'
            >
            </CssTextField>
          </Grid>
          <Grid
            item
            xs={12}
            mb={12}
            sx={{
              marginBottom: 3
            }}
          >
            <CssTextField
              variant='outlined'
              size='small'
              label='Ingresa tu correo'
            >
            </CssTextField>
          </Grid>
          <Grid
            item
            xs={12}
            mb={12}
            sx={{
              marginBottom: 8
            }}
          >
            <CssTextField
              variant='outlined'
              size='small'
              label='Ingresa tu edad'
            >
            </CssTextField>
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained">
              Registrarse
            </Button>
          </Grid>

        </Grid>
      </Box>
    </Container>
  );
};



export default Register;
