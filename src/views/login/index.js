import React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { Planet } from 'react-planet';
import Container from '../shared/Base';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { Button, Typography } from '@mui/material';
import axios from 'axios';

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

const Login = (props) => {
  const [email, setEmail] = React.useState('');

  const login = () => {
    axios.post(`${process.env.REACT_APP_BACK_URL}api/user/login`, {
      email,
    })
    .then((response) => {
      const data = response.data;
      if (data.login) {
        localStorage.setItem('user', JSON.stringify(data.user));
        window.location.href = '/update';
      }
    })
  }

  return(
    <Container
      display='flex'
      modal={2}
    >
      <Box
        display=''
        height='350px'
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
              marginBottom: 20
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
            sx={{
              marginBottom: 5
            }}
          >
            <Typography
             color='white'
             variant='h5'
            >
              Iniciar sesión
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
              label='Ingresa tu correo'
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            >
            </CssTextField>
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" onClick={login}>
              Entrar
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Login;
