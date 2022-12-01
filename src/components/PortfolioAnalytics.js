import React, { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import investWisely from '../assets/investWisely.png';

const PortfolioAnalytics = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <section
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          padding: '2rem',
          border: '1px solid transparent',
          margin: ` ${scrolled ? '6rem' : '12rem'}  2rem 3rem 2rem`,
          borderRadius: '20px',
          background: '#5bccf6',
        }}
      >
        <img src={investWisely} alt='analyticalLogo' width={600} style={{ borderRadius: '10px' }} />

        <main style={{ marginLeft: '5rem' }}>
          <Typography
            marginBottom={'1.5rem'}
            style={{ fontSize: '2rem', fontWeight: 'bold', fontFamily: 'Poppins', lineHeight: '48px', color: '#0015FF' }}
          >
            Invest Wisely
          </Typography>
          <div style={{ display: 'flex', alignItems: 'flex-start' }}>
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
