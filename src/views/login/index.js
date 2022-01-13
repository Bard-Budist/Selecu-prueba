import React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { Planet } from 'react-planet';
import Container from '../shared/Base';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

const Login = (props) => {
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
            xs={4.3}
          />
          <Grid
            item
            xs={2}
            sx={{
              marginBottom: 25
            }}
            alignContent='center'
          >
            <Planet
              dragablePlanet
              dragRadiusPlanet={20}
              centerContent={
                <div
                  style={{
                    height: 100,
                    width: 100,
                    borderRadius: '50%',
                    backgroundColor: '#1da8a4',
                  }}
                />
              }
              open
            >
              <div
                style={{
                  height: 45,
                  width: 45,
                  borderRadius: '50%',
                  backgroundColor: '#9257ad',
                }}
              />
              <div
                style={{
                  height: 40,
                  width: 40,
                  borderRadius: '50%',
                  backgroundColor: '#9257ad',
                }}
              />
              <div
                style={{
                  height: 50,
                  width: 50,
                  borderRadius: '50%',
                  backgroundColor: '#9257ad',
                }}
              />
            </Planet>
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
              label='Correo'
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
              type='password'
              label='Contraseña'
            >
            </CssTextField>
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained">
              Iniciar sesión
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Login;
