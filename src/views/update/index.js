import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { Planet } from 'react-planet';
import Typography from '@mui/material/Typography';
import Container from '../shared/Base';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
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
  '& .Mui-disabled': {
    '& input': {
      color: 'white'
    }
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

const Update = () => {
  const [email, setEmail] = React.useState('');
  const [age, setAge] = React.useState('');
  const [name, setName] = React.useState('');

  const theme = ({
    palette: {
      text:{
        light: '#FFFF',
      }
    },
  });

  const updateUser = () => {
    axios.put(`${process.env.REACT_APP_BACK_URL}api/user`, {
      name,
      age,
      email
    }).then((response) => {
      const user = response.data;
      if (user) {
        localStorage.setItem('user', JSON.stringify(user));
      }
    })
  };

  useEffect(() => {
    if (localStorage.getItem('user')) {
      const user = JSON.parse(localStorage.getItem('user'));
      setEmail(user.email);
      setName(user.name);
      setAge(user.age);
    }
  }, [])

  return(
    <Container
      modal={3}
      display='flex'
    >
      <Box
        display=''
        height='470px'
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
              marginBottom: 3
            }}
          >
            <Typography variant='h5' letterSpacing='0.1em' color={theme.palette.text.light} align='center'>
              Perfil
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
              label='Nombre'
              value={name || ''}
              onChange={(e) => {
                setName(e.target.value);
              }}
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
              disabled
              label='Correo'
              value={email || ''}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            >
            </CssTextField>
          </Grid>
          <Grid
            item
            xs={12}
            mb={12}
            sx={{
              marginBottom: 4
            }}
          >
            <CssTextField
              variant='outlined'
              size='small'
              label='Edad'
              value={age || ''}
              onChange={(e) => {
                setAge(e.target.value);
              }}
            >
            </CssTextField>
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" onClick={updateUser}>
              Actualizar
            </Button>
          </Grid>

        </Grid>
      </Box>
    </Container>
  );
};

export default Update;
