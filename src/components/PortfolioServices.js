import { Button, Typography } from '@mui/material';
import React from 'react';
import analyticalLogo from '../assets/analytical.jpg';

const PortfolioServices = () => {
  return (
    <>
      <section style={{ display: 'flex', marginTop: '12rem', marginLeft: '6rem', justifyContent: 'space-between' }}>
        <main>
          <Typography marginBottom={'1.2rem'} style={{ fontSize: '4rem', fontWeight: '500', color: '#282828', fontFamily: 'Poppins' }}>
            PORTFOLIO SERVICES
          </Typography>
          <Typography
            marginBottom={'1rem'}
            style={{ color: '#0b4399', fontSize: '1.2rem', fontWeight: '600', fontFamily: 'Source Sans Pro' }}
          >
            Platform by <span style={{ fontSize: '1.25rem', fontStyle: 'italic', color: '#f39305' }}>FYINNOVEA</span>
          </Typography>
          <Button
            className='begin-now'
            style={{ background: '#0b4399', color: 'white', fontSize: '1.2rem', padding: '5px 15px' }}
            variant='contained'
          >
            BEGIN NOW
          </Button>
        </main>

        <img src={analyticalLogo} alt='analyticalLogo' />
      </section>
    </>
  );
};

export default PortfolioServices;
