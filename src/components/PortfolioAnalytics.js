import React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import portfolioAnalytics from '../assets/analytics.jpg';

const PortfolioAnalytics = () => {
  return (
    <>
      <div className='container'>
        <section
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '6rem 6rem 5rem 6rem',
            marginTop: '6rem',
          }}
        >
          <img src={portfolioAnalytics} alt='analyticalLogo' width={700} style={{ borderRadius: '4%' }} />

          <main style={{ marginLeft: '2rem' }}>
            <Typography marginBottom={'1.2rem'} style={{ fontSize: '2.5rem', fontWeight: '500', fontFamily: 'Poppins' }}>
              Invest Wisely
            </Typography>
            <Typography
              marginBottom={'1rem'}
              style={{ fontSize: '1.2rem', fontWeight: '400', fontFamily: 'Source Sans Pro', textAlign: 'justify' }}
            >
              With FYINNOVEA portfolio management web platform &amp; mobile apps, monitor your investments easily from anywhere and at any
              time.
            </Typography>
            <Typography
              marginBottom={'1rem'}
              style={{ fontSize: '1.2rem', fontWeight: '400', fontFamily: 'Source Sans Pro', textAlign: 'justify' }}
            >
              As the market changes, you may need to make changes in your investment goals, allocation, diversification / concentration
              &amp; timely monitoring your investments using high benchmarks &amp; decision based on data analytics
            </Typography>
          </main>
        </section>
      </div>
    </>
  );
};

export default PortfolioAnalytics;
