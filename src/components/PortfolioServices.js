import { Button, Typography } from '@mui/material';
import React from 'react';
import analyticalLogo from '../assets/analytical.jpg';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';

const PortfolioServices = () => {
  return (
    <>
      {/* <section style={{ display: 'flex', marginTop: '12rem', marginLeft: '6rem', justifyContent: 'space-between' }}> */}
      <section style={{ marginTop: '10rem', display: 'flex', justifyContent: 'space-evenly' }}>
        <main style={{ justifySelf: 'center' }}>
          <Typography
            style={{
              fontSize: '4rem',
              fontWeight: '500',
              fontFamily: 'Poppins',
              background:
                '-webkit-linear-gradient(66.29deg, #0b4399 0%, #1D0499 9.03%, #100BC5 26.1%, #0710E4 42.16%, #0213F8 55.2%, #0015FF 64.24%, #003EFF 72.27%, #007DFF 85.31%, #007DFF 94.35%, #007DFF 99.37%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            PORTFOLIO ANALYTICS
          </Typography>
          <Typography
            marginBottom={'3rem'}
            style={{ color: '#0b4399', fontSize: '1.2rem', fontWeight: '600', fontFamily: 'Source Sans Pro' }}
          >
            Platform by <span style={{ fontSize: '1.25rem', fontStyle: 'italic', color: '#f39305' }}>FYINNOVEA</span>
          </Typography>
          <Button
            className='begin-now'
            style={{
              width: '30%',
              background: '#e5004c',
              color: 'white',
              fontSize: '1.2rem',
              padding: '15px 20px',
              borderRadius: '20px',
            }}
            variant='contained'
            endIcon={<ArrowCircleRightOutlinedIcon style={{ fontSize: '1.7rem' }} />}
          >
            BEGIN NOW
          </Button>
        </main>

        <img src={analyticalLogo} alt='analyticalLogo' width={500} />
      </section>
    </>
  );
};

export default PortfolioServices;
