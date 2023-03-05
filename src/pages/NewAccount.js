import { useState, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';
import axios from 'axios';
import { Alert, Snackbar } from '@mui/material';

function Copyright(props) {
  return (
    <Typography variant='body2' color='text.secondary' align='center' {...props}>
      {'Copyright © '}
      <Link color='inherit' href='/'>
        FYINNOVEA
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function NewAccount() {
  const [newAccount, setNewAccount] = useState({
    fName: '',
    lName: '',
    email: '',
    mobile: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({
    fName: '',
    lName: '',
    email: '',
    mobile: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;

    setNewAccount(prev => {
      return {
        ...prev,
        [name]: value,
      };
    });

    formValidation({
      [name]: value,
    });
  };

  const [openSnackBar, setOpenSnackBar] = useState(false);

  const [snackBarMessage, setSnackBarMessage] = useState('');

  const handleSubmit = async event => {
    event.preventDefault();
    const validForm = formValidation();
    const formInput = {
      first_name: newAccount.fName,
      last_name: newAccount.lName,
      email_id: newAccount.email,
      phone_number: newAccount.mobile,
      password: newAccount.password,
      confirm_Password: newAccount.confirmPassword,
    };
    if (validForm) {
      try {
        const response = await axios({
          method: 'post',
          baseURL: 'https://35.154.127.7:9090/api/services',
          url: '/signup',
          data: formInput,
        });
        console.log(response);
        setOpenSnackBar(true);
        setSnackBarMessage('Account has been created successfully.');
      } catch (error) {
        console.log(error);
        setOpenSnackBar(true);
        setSnackBarMessage('Something went wrong. Please contact our support team.');
        return error;
      }
    }
  };

  useEffect(() => {
    if (newAccount.confirmPassword.length && newAccount.password !== newAccount.confirmPassword) {
      setErrors(prev => {
        return {
          ...prev,
          confirmPassword: 'Passwords does not match.',
        };
      });
    }
  }, [newAccount.confirmPassword, newAccount.password]);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackBar(false);
  };

  const formValidation = (values = newAccount) => {
    let errObj = {};
    if ('fName' in values) errObj.fName = values.fName ? '' : 'Required*';
    if ('lName' in values) errObj.lName = values.lName ? '' : 'Required*';
    if ('email' in values) errObj.email = values.email ? '' : 'Required*';
    if ('password' in values) errObj.password = values.password ? '' : 'Required*';
    if ('mobile' in values) errObj.mobile = values.mobile ? '' : 'Required*';
    if ('confirmPassword' in values) errObj.confirmPassword = values.confirmPassword ? '' : 'Required*';

    setErrors(prevState => {
      return {
        ...prevState,
        ...errObj,
      };
    });

    return Object.values(errObj).every(value => value === '');
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Container component='main' maxWidth='xs'>
          <CssBaseline />

          <Box
            sx={{
              marginTop: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component='h1' variant='h5'>
              Create your account
            </Typography>
            {/* <Typography component='p' variant='p' sx={{ color: 'gray', marginTop: '10px' }}>
            Already an Investor subscriber or former Premium member?
            <RouterLink style={{ marginLeft: '5px' }}>Sign In.</RouterLink>
          </Typography> */}
            <Box component='form' noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete='given-name'
                    name='fName'
                    required
                    fullWidth
                    id='firstName'
                    label='First Name'
                    value={newAccount.fName}
                    onChange={handleChange}
                    helperText={errors.fName}
                    error={errors.fName ? true : false}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id='lastName'
                    label='Last Name'
                    name='lName'
                    value={newAccount.lName}
                    onChange={handleChange}
                    helperText={errors.lName}
                    error={errors.lName ? true : false}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id='email'
                    label='Email Address'
                    name='email'
                    autoComplete='email'
                    value={newAccount.email}
                    onChange={handleChange}
                    helperText={errors.email}
                    error={errors.email ? true : false}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    type='number'
                    label='Mobile Number'
                    name='mobile'
                    value={newAccount.mobile}
                    onChange={handleChange}
                    helperText={errors.mobile}
                    error={errors.mobile ? true : false}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    name='password'
                    label='Password'
                    type='password'
                    id='password'
                    autoComplete='new-password'
                    value={newAccount.password}
                    onChange={handleChange}
                    helperText={errors.password}
                    error={errors.password ? true : false}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    name='confirmPassword'
                    label='Confirm Password'
                    type='password'
                    id='password'
                    autoComplete='new-password'
                    value={newAccount.confirmPassword}
                    onChange={handleChange}
                    helperText={errors.confirmPassword}
                    error={errors.confirmPassword ? true : false}
                  />
                </Grid>

                <Grid item xs={12}>
                  <FormControlLabel
                    control={<Checkbox value='allowExtraEmails' color='primary' />}
                    label='Are you a financial professional.'
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={<Checkbox value='allowExtraEmails' color='primary' />}
                    label='Get emails about FYINNOVEA products and features.'
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={<Checkbox value='allowExtraEmails' color='primary' />}
                    label='We will not sell or redistribute your email address”before tick box “I have Read & Agree.'
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={<Checkbox value='allowExtraEmails' color='primary' />}
                    label='I have read and agree to the FYINNOVEA Terms of Use, the license agreement that governs my use of the investor,including,without limitation,the FYINNOVEA investor service. '
                  />
                </Grid>
              </Grid>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <RouterLink to={'/'} style={{ textDecoration: 'none' }}>
                  <Button type='submit' variant='contained' sx={{ mt: 3, mb: 2 }}>
                    CANCEL
                  </Button>
                </RouterLink>

                <Button type='submit' variant='contained' sx={{ mt: 3, mb: 2 }}>
                  CREATE ACCOUNT
                </Button>
              </Box>

              <Grid container justifyContent='flex-end'>
                <Grid item>
                  <RouterLink to='/signIn' variant='body2'>
                    Already have an account? Sign in
                  </RouterLink>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 5 }} />
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
