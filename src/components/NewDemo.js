import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import contactImg from '../assets/contact-img.svg';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import {
  Alert,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Snackbar,
  TextField,
  Typography,
} from '@mui/material';
import axios from 'axios';

const Contact = () => {
  const baseURL = 'http://44.201.160.172:9090/api/services/contact_us';

  const [demoInput, setDemoInput] = useState({
    name: '',
    email: '',
    website: '',
    mobile: '',
    category: '',
    otherCategory: '',
  });

  const [openSnackBar, setOpenSnackBar] = useState(false);

  const [snackBarMessage, setSnackBarMessage] = useState('');

  const handleSubmit = async e => {
    const input = {
      fullname: demoInput.name,
      email: demoInput.email,
      website: demoInput.website,
      phone_number: demoInput.mobile,
      message: demoInput.category === 'other' ? demoInput.otherCategory : demoInput.category,
    };
    e.preventDefault();
    try {
      const response = await axios.post(baseURL, input);
      console.log(response);
      setDemoInput({
        name: '',
        email: '',
        website: '',
        mobile: '',
        category: '',
        otherCategory: '',
      });
      setOpenSnackBar(true);
      setSnackBarMessage('Request Submitted Successfully. Our team will contact you soon.');
    } catch (error) {
      console.log(error);
      setOpenSnackBar(true);
      setSnackBarMessage('Something went wrong. Please contact our support team.');
      return error;
    }
  };

  const handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    setDemoInput(prev => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackBar(false);
  };

  return (
    <>
      <section>
        <Typography
          marginBottom={'1.2rem'}
          style={{
            textAlign: 'center',
            fontSize: '2rem',
            fontWeight: '400',
            color: '#282828',
            fontFamily: 'Poppins',
            paddingTop: '1.5rem',
          }}
        >
          Portfolio Analytics platform for the Tech Savy Advisors &amp; Family Offices
        </Typography>
      </section>
      <section className='contact' id='connect'>
        <Container>
          <Row style={{ display: 'flex' }} className='align-items-center'>
            <Col size={8} md={6}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <img
                    className={isVisible ? 'animate__animated animate__zoomIn' : ''}
                    src={contactImg}
                    alt='Contact Us'
                    // width={200}
                  />
                )}
              </TrackVisibility>
            </Col>
            <Col size={12} md={6}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div>
                    <h2 style={{ color: 'whitesmoke' }}>Request a Demo</h2>
                    <form onSubmit={handleSubmit}>
                      <Row>
                        <div style={{ display: 'flex' }}>
                          <Col size={12} sm={6} style={{ marginRight: '0.5rem' }} className='px-1'>
                            <input
                              type='text'
                              required
                              value={demoInput.name}
                              placeholder='Name*'
                              name='name'
                              onChange={handleInputChange}
                            />
                          </Col>
                          <Col size={12} sm={6} className='px-1'>
                            <input
                              type='email'
                              required
                              name='email'
                              value={demoInput.email}
                              placeholder='Email*'
                              onChange={handleInputChange}
                            />
                          </Col>
                        </div>
                        <div style={{ display: 'flex' }}>
                          <Col size={12} sm={6} style={{ marginRight: '0.5rem' }} className='px-1'>
                            <input
                              type='text'
                              value={demoInput.website}
                              placeholder='Website'
                              name='website'
                              onChange={handleInputChange}
                            />
                          </Col>
                          <Col size={12} sm={6} className='px-1'>
                            <input
                              type='number'
                              required
                              value={demoInput.mobile}
                              placeholder='Mobile No*'
                              name='mobile'
                              onChange={handleInputChange}
                            />
                          </Col>
                        </div>

                        <Col size={12} className='px-1'>
                          <FormControl style={{ width: '25rem' }}>
                            <FormLabel
                              style={{
                                color: 'white',
                                width: '25rem',
                                textAlign: 'left',
                              }}
                              id='demo-radio-buttons-group-label'
                            >
                              You are an..
                            </FormLabel>
                            <RadioGroup
                              name='category'
                              value={demoInput.category}
                              onChange={handleInputChange}
                            >
                              <FormControlLabel
                                value='investment_advisor'
                                control={<Radio required />}
                                label='Investment Advisor'
                                style={{ color: 'white' }}
                              />
                              <FormControlLabel
                                value='portfolio_manager'
                                control={<Radio required />}
                                label='Portfolio Manager'
                                style={{ color: 'white' }}
                              />
                              <FormControlLabel
                                value='family_office'
                                control={<Radio required />}
                                label='Family Office'
                                style={{ color: 'white' }}
                              />
                              <FormControlLabel
                                value='other'
                                control={<Radio required />}
                                label='Other'
                                style={{ color: 'white' }}
                              />
                            </RadioGroup>
                            {demoInput.category === 'other' ? (
                              <TextField
                                style={{ width: '25rem', margin: '2px 0' }}
                                id='outlined-basic4'
                                label='Other'
                                variant='outlined'
                                name='otherCategory'
                                value={demoInput.otherCategory}
                                onChange={handleInputChange}
                              />
                            ) : (
                              <></>
                            )}
                          </FormControl>
                          <div style={{ width: '25rem', textAlign: 'left' }}>
                            <Button
                              className='btn-contact'
                              type='submit'
                              variant='contained'
                              style={{ borderRadius: '20px' }}
                            >
                              Submit
                            </Button>
                          </div>
                        </Col>
                      </Row>
                    </form>
                  </div>
                )}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
      </section>

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
};

export default Contact;
