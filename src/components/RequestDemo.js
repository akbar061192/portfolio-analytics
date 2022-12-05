import { Button, FormControl, TextField, Typography } from '@mui/material';
import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import { useState } from 'react';

const RequestDemo = () => {
  const [demoInput, setDemoInput] = useState({
    name: '',
    email: '',
    website: '',
    mobile: '',
    category: '',
    otherCategory: '',
  });

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

  const handleSubmitForm = event => {
    event.preventDefault();
    console.log(demoInput);
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
        <main style={{ textAlign: 'center' }}>
          <Typography marginBottom={'1rem'} style={{ fontSize: '1.4rem', fontWeight: '600', fontFamily: 'Source Sans Pro' }}>
            Request a Demo
          </Typography>
          <form
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-evenly', height: '560px' }}
            onSubmit={handleSubmitForm}
          >
            <TextField
              style={{ width: '25rem' }}
              id='outlined-basic1'
              label='Your Name'
              variant='outlined'
              required
              name='name'
              value={demoInput.name}
              onChange={handleInputChange}
            />
            <TextField
              style={{ width: '25rem' }}
              id='outlined-basic2'
              label='Email'
              variant='outlined'
              required
              name='email'
              value={demoInput.email}
              onChange={handleInputChange}
            />
            <TextField
              style={{ width: '25rem' }}
              id='outlined-basic3'
              label='Website'
              variant='outlined'
              name='website'
              value={demoInput.website}
              onChange={handleInputChange}
            />
            <TextField
              type={'number'}
              style={{ width: '25rem' }}
              id='outlined-basic4'
              label='Mobile Number'
              variant='outlined'
              required
              name='mobile'
              value={demoInput.mobile}
              onChange={handleInputChange}
            />
            <FormControl style={{ width: '25rem' }}>
              <FormLabel style={{ width: '25rem', textAlign: 'left' }} id='demo-radio-buttons-group-label'>
                You are an..
              </FormLabel>
              <RadioGroup name='category' value={demoInput.category} onChange={handleInputChange}>
                <FormControlLabel value='investment_advisor' control={<Radio />} label='Investment Advisor' />
                <FormControlLabel value='portfolio_manager' control={<Radio />} label='Portfolio Manager' />
                <FormControlLabel value='family_office' control={<Radio />} label='Family Office' />
                <FormControlLabel value='other' control={<Radio />} label='Other' />
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
              <Button type='submit' variant='contained' style={{ background: '#0b4399', padding: '0.6rem 2.5rem' }}>
                Submit
              </Button>
            </div>
          </form>
        </main>
      </section>
    </>
  );
};

export default RequestDemo;
