import React, { useEffect, useState, useRef } from 'react';
import { Typography } from '@mui/material';
import investmentBanking from '../assets/analytics_01.jpg';
import dashboard from '../assets/analytics_02.jpg';
import tech from '../assets/analytics_03.png';

const bgImages = [tech, dashboard, investmentBanking];
const delay = 2500;

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

  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex(prevIndex =>
          prevIndex === bgImages.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <>
      <section
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          padding: '2rem',
          margin: ` ${scrolled ? '4rem' : '13rem'}  2rem 0rem 2rem`,
        }}
      >
        <div className='slideshow'>
          <div
            className='slideshowSlider'
            style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
          >
            {bgImages.map((bgImage, index) => (
              <img src={bgImage} className='slide' key={index} alt={bgImage} />
            ))}
          </div>

          <div className='slideshowDots'>
            {bgImages.map((_, idx) => (
              <div
                key={idx}
                className={`slideshowDot${index === idx ? ' active' : ''}`}
                onClick={() => {
                  setIndex(idx);
                }}
              ></div>
            ))}
          </div>
        </div>

        {/*  */}
        <main style={{ marginLeft: '3rem' }}>
          <Typography
            marginBottom={'0.7rem'}
            style={{
              fontSize: '1.7rem',
              fontWeight: 'bold',
              fontFamily: 'Poppins',
              lineHeight: '48px',
              color: '#0015FF',
            }}
          >
            Invest Wisely
          </Typography>
          <div style={{ display: 'flex', alignItems: 'flex-start' }}>
            <Typography
              marginBottom={'1rem'}
              style={{
                fontSize: '1.1rem',
                fontWeight: '400',
                fontFamily: 'Source Sans Pro',
                textAlign: 'justify',
              }}
            >
              With FYINNOVEA portfolio management web platform &amp; mobile
              apps, monitor your investments easily from anywhere and at any
              time.
            </Typography>
          </div>

          <div style={{ display: 'flex', alignItems: 'flex-start' }}>
            <Typography
              marginBottom={'1rem'}
              style={{
                fontSize: '1.1rem',
                fontWeight: '400',
                fontFamily: 'Source Sans Pro',
                textAlign: 'justify',
              }}
            >
              As the market changes, you may need to make changes in your
              investment goals, allocation, diversification/concentration &amp;
              timely monitoring your investments using high benchmarks &amp;
              decision based on data analytics
            </Typography>
          </div>

          <Typography
            marginBottom={'0.7rem'}
            style={{
              fontSize: '1.7rem',
              fontWeight: 'bold',
              fontFamily: 'Poppins',
              lineHeight: '48px',
              color: '#0015FF',
            }}
          >
            Research before you invest
          </Typography>
          <div style={{ display: 'flex', alignItems: 'flex-start' }}>
            <Typography
              style={{
                fontSize: '1.1rem',
                fontWeight: '400',
                fontFamily: 'Source Sans Pro',
                textAlign: 'justify',
              }}
            >
              FYINNOVEA Portfolio Analytics platform processes large sets of
              data, generated via multiple data streams from a wide variety of
              sources on a constant basis almost every day to identify market
              trends, forecast risks, analyze sentiments in social media and
              prevent potential investment fraud resulting in enormous wealth
            </Typography>
          </div>
        </main>
      </section>
    </>
  );
};

export default PortfolioAnalytics;
