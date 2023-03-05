import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import ForgotPassword from './ForgotPassword';
import { Alert, Snackbar } from '@mui/material';
import axios from 'axios';

function Copyright(props) {
  return (
    <Typography variant='body2' color='text.secondary' align='center' {...props}>
      {'Copyright © '}
      <Link color='inherit' to='/'>
        FYINNOVEA
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignIn() {
  const [userInputs, setUserInputs] = useState({
    email: '',
    password: '',
  });

  const [openSnackBar, setOpenSnackBar] = useState(false);

  const [snackBarMessage, setSnackBarMessage] = useState('');

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackBar(false);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    const formInput = {
      userid: userInputs.email,
      password: userInputs.password,
    };

    console.log(formInput);

    try {
      const response = await axios({
        method: 'post',
        baseURL: 'https://35.154.127.7:9090/api/services',
        url: '/signin',
        data: formInput,
      });
      console.log(response);
      setOpenSnackBar(true);
      setSnackBarMessage('Successfuly signed in.');
      setUserInputs({
        email: '',
        password: '',
      });
    } catch (error) {
      console.log(error);
      setOpenSnackBar(true);
      setSnackBarMessage('Something went wrong. Please contact our support team.');
      return error;
    }
  };

  const [openForgotPassword, setOpenForgotPassword] = useState(false);

  const handleCloseForgotPassword = () => {
    setOpenForgotPassword(false);
  };

  return (
    <>
      {openForgotPassword ? (
        <ForgotPassword
          openForgotPassword={openForgotPassword}
          handleCloseForgotPassword={handleCloseForgotPassword}
        />
      ) : null}
      <ThemeProvider theme={theme}>
        <Container component='main' maxWidth='xs'>
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component='h1' variant='h5'>
              Sign in
            </Typography>
            <Box component='form' onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <TextField
                margin='normal'
                required
                fullWidth
                id='email'
                label='Email Address'
                name='email'
                autoComplete='email'
                autoFocus
                value={userInputs.email}
                onChange={e =>
                  setUserInputs(prev => {
                    return {
                      ...prev,
                      email: e.target.value,
                    };
                  })
                }
              />
              <TextField
                margin='normal'
                required
                fullWidth
                name='password'
                label='Password'
                type='password'
                id='password'
                autoComplete='current-password'
                value={userInputs.password}
                onChange={e =>
                  setUserInputs(prev => {
                    return {
                      ...prev,
                      password: e.target.value,
                    };
                  })
                }
              />
              <Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link
                    variant='body2'
                    onClick={() => {
                      setOpenForgotPassword(true);
                    }}
                  >
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link to='/newAccount' variant='body2'>
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
      </ThemeProvider>

      <Snackbar
        open={openSnackBar}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={handleClose}
          severity={snackBarMessage.includes('wrong') ? 'error' : 'success'}
          sx={{ width: '100%' }}
        >
          {snackBarMessage}
        </Alert>
      </Snackbar>
    </>
  );
}
