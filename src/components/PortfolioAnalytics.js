import React from 'react';
import { Typography } from '@mui/material';
import portfolioAnalytics from '../assets/portfolio_analytics.jpg';
import TripOriginRoundedIcon from '@mui/icons-material/TripOriginRounded';

const PortfolioAnalytics = () => {
  return (
    <>
      <section
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          padding: '2rem',
          border: '1px solid transparent',
          margin: '10rem 2rem 3rem 2rem',
          borderRadius: '20px',
          background: 'whitesmoke',
        }}
      >
        <img src={portfolioAnalytics} alt='analyticalLogo' width={600} style={{ borderRadius: '10px' }} />

        <main style={{ marginLeft: '5rem' }}>
          <Typography
            marginBottom={'1.5rem'}
            style={{ fontSize: '2rem', fontWeight: 'bold', fontFamily: 'Poppins', lineHeight: '48px', color: '#0015FF' }}
          >
            Invest Wisely
          </Typography>
          <div style={{ display: 'flex', alignItems: 'flex-start' }}>
            <TripOriginRoundedIcon style={{ width: '20px', marginTop: '5px', marginRight: '10px', color: '#1d12cc' }} />

            <Typography
              marginBottom={'1rem'}
              style={{ fontSize: '1.2rem', fontWeight: '400', fontFamily: 'Source Sans Pro', textAlign: 'justify' }}
              // color='gray'
            >
              With FYINNOVEA portfolio management web platform &amp; mobile apps, monitor your investments easily from anywhere and at any
              time.
            </Typography>
          </div>

          <div style={{ display: 'flex', alignItems: 'flex-start' }}>
            <TripOriginRoundedIcon style={{ width: '20px', marginTop: '5px', marginRight: '10px', color: '#1d12cc' }} />
            <Typography
              marginBottom={'1rem'}
              style={{ fontSize: '1.2rem', fontWeight: '400', fontFamily: 'Source Sans Pro', textAlign: 'justify' }}
              // color='gray'
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
