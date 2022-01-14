import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Backdrop from '@mui/material/Backdrop';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import HelpIcon from '@mui/icons-material/Help';
import './style.css';


const Container = ({children, modal, ...rest}) => {
  const [open, setOpen] = React.useState(false);

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const openModel = () => {
    setOpen(true);
  }

  const onClose = () => {
    setOpen(false);
  }

  const goLogin = () => {
    window.location.href = '/login'
  };

  const goRegister = () => {
    window.location.href = '/register'
  };
  const goUpdate = () => {
    window.location.href = '/update'
  };

  return (
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
      <div className='button-about'
        style={{
          height: 50,
          width: 50,
          borderRadius: '50%',
        }}
        onClick={openModel}
      >
        <HelpIcon
          sx={{ 
            color: 'white',
            width: 50,
            height: 50,
          }}
        />
      </div>
      {modal === 1 &&
        <Modal
          open={open}
          onClose={onClose}
          BackdropComponent={Backdrop}
          BackdropProps={{
          timeout: 500,
          }}
        >
          <Fade in={open}>
            <Box 
              sx={{
                position: 'fixed',
                top: '50%',
                left: '50%',
                width: isMd ? 400 : '95%',
                boxShadow: 24,
                padding: 5,
                textAlign: 'center',
                height: 270,
                borderRadius: 2,
                transform: 'translate(-50%, -50%)',
                bgcolor: theme.palette.background.paper,
              }}
            >
              <Typography variant="h5" color="primary">
                Rutas utilizadas
              </Typography>
              <Typography sx={{ mt: 2 }}>
                POST: <strong>/api/user/</strong>
                <br/>
                Crea un usuario y se guarda en la base de datos
              </Typography>
              <Divider sx={{ marginY: 4 }} />
              <Typography sx={{ mt: 2 }}>
                Body: <br/>
                <strong>
                  name: string,
                  email: string,
                  age: string
                </strong>
              </Typography>
              <Button variant="contained" onClick={goLogin}>
                Ir a Iniciar sesión
              </Button>
              <Button variant="contained" onClick={goRegister}>
                Ir a Registro
              </Button>
              <Button variant="contained" onClick={goUpdate}>
                Ir a Perfil
              </Button>
            </Box>
          </Fade>
        </Modal>
      }
      {modal === 2 &&
        <Modal
          open={open}
          onClose={onClose}
          BackdropComponent={Backdrop}
          BackdropProps={{
          timeout: 500,
          }}
        >
          <Fade in={open}>
            <Box 
              sx={{
                position: 'fixed',
                top: '50%',
                left: '50%',
                width: isMd ? 400 : '95%',
                boxShadow: 24,
                padding: 5,
                textAlign: 'center',
                height: 270,
                borderRadius: 2,
                transform: 'translate(-50%, -50%)',
                bgcolor: theme.palette.background.paper,
              }}
            >
              <Typography variant="h5" color="primary">
                Rutas utilizadas
              </Typography>
              <Typography sx={{ mt: 2 }}>
                POST: <strong>/api/user/login</strong>
                <br/>
                Inicia sesión básico y almacena el usuario en localStorage
              </Typography>
              <Divider sx={{ marginY: 4 }} />
              <Typography sx={{ mt: 2 }}>
                Body: <br/>
                <strong>
                  email: string,
                </strong>
              </Typography>
              <Button variant="contained" onClick={goLogin}>
                Ir a Iniciar sesión
              </Button>
              <Button variant="contained" onClick={goRegister}>
                Ir a Registro
              </Button>
              <Button variant="contained" onClick={goUpdate}>
                Ir a Perfil
              </Button>
            </Box>
          </Fade>
        </Modal>
      }
      {modal === 3 &&
        <Modal
          open={open}
          onClose={onClose}
          BackdropComponent={Backdrop}
          BackdropProps={{
          timeout: 500,
          }}
        >
          <Fade in={open}>
            <Box 
              sx={{
                position: 'fixed',
                top: '50%',
                left: '50%',
                width: isMd ? 400 : '95%',
                boxShadow: 24,
                padding: 5,
                textAlign: 'center',
                height: 270,
                borderRadius: 2,
                transform: 'translate(-50%, -50%)',
                bgcolor: theme.palette.background.paper,
              }}
            >
              <Typography variant="h5" color="primary">
                Rutas utilizadas
              </Typography>
              <Typography sx={{ mt: 2 }}>
                PUT: <strong>/api/user</strong>
                <br/>
                Actualización de datos del usuario
              </Typography>
              <Divider sx={{ marginY: 4 }} />
              <Typography sx={{ mt: 2 }}>
                Body: <br/>
                <strong>
                  email: string,
                  name: string,
                  age: string
                </strong>
              </Typography>
              <Button variant="contained" onClick={goLogin}>
                Ir a Iniciar sesión
              </Button>
              <Button variant="contained" onClick={goRegister}>
                Ir a Registro
              </Button>
              <Button variant="contained" onClick={goUpdate}>
                Ir a Perfil
              </Button>
            </Box>
          </Fade>
        </Modal>
      }
      
    </Box>
)};

export default Container;