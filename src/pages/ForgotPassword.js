import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function ForgotPassword(props) {
  const { openForgotPassword, handleCloseForgotPassword } = props;

  return (
    <div>
      <Dialog open={openForgotPassword} onClose={handleCloseForgotPassword}>
        <DialogTitle>Forgot Password?</DialogTitle>
        <DialogContent>
          <DialogContentText>Please enter your email address to search for your account.</DialogContentText>
          <TextField
            autoFocus
            variant='outlined'
            margin='dense'
            id='name'
            label='Email Address*'
            type='email'
            fullWidth
            style={{ marginTop: '1rem' }}
          />
        </DialogContent>
        <DialogActions style={{ marginBottom: '1rem' }}>
          <Button onClick={handleCloseForgotPassword}>Cancel</Button>
          <Button variant='contained' onClick={handleCloseForgotPassword}>
            Reset
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
