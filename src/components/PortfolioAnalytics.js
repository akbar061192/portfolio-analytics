import React from 'react';
import { Typography } from '@mui/material';
import portfolioAnalytics from '../assets/analytics.png';
import circleIcon from '../assets/circle-icon.png';
import TripOriginRoundedIcon from '@mui/icons-material/TripOriginRounded';

const PortfolioAnalytics = () => {
  return (
    <>
      <section
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          padding: '6rem 6rem 5rem 6rem',
          border: '1px solid transparent',
          margin: '19rem 7rem 0 7rem',
          borderRadius: '20px',
          background: 'whitesmoke',
        }}
      >
        <img src={portfolioAnalytics} alt='analyticalLogo' style={{ borderRadius: '50%' }} />

        <main style={{ marginLeft: '5rem' }}>
          <Typography
            marginBottom={'1.5rem'}
            style={{ fontSize: '3rem', fontWeight: 'bold', fontFamily: 'Poppins', lineHeight: '48px', color: '#0015FF' }}
          >
            Invest Wisely
          </Typography>
          <div style={{ display: 'flex', alignItems: 'flex-start' }}>
            <TripOriginRoundedIcon style={{ width: '20px', marginTop: '5px', marginRight: '10px', color: '#1d12cc' }} />

            <Typography
              marginBottom={'1rem'}
              style={{ fontSize: '1.5rem', fontWeight: '400', fontFamily: 'Source Sans Pro', textAlign: 'justify' }}
              color='gray'
            >
              With FYINNOVEA portfolio management web platform &amp; mobile apps, monitor your investments easily from anywhere and at any
              time.
            </Typography>
          </div>

          <div style={{ display: 'flex', alignItems: 'flex-start' }}>
            <TripOriginRoundedIcon style={{ width: '20px', marginTop: '5px', marginRight: '10px', color: '#1d12cc' }} />
            <Typography
              marginBottom={'1rem'}
              style={{ fontSize: '1.5rem', fontWeight: '400', fontFamily: 'Source Sans Pro', textAlign: 'justify' }}
              color='gray'
            >
              As the market changes, you may need to make changes in your investment goals, allocation, diversification / concentration
              &amp; timely monitoring your investments using high benchmarks &amp; decision based on data analytics
            </Typography>
          </div>
        </main>
      </section>
    </>
  );
};

export default PortfolioAnalytics;
