import React from 'react';
import { Typography } from '@mui/material';
import investmentBanking from '../assets/investment-banking.png';
import dashboard from '../assets/dashboard.png';
import tech from '../assets/tech.png';

const FooterCard = props => {
  const { title, img, desc } = props;
  return (
    <div
      style={{
        border: '1px solid white',
        borderRadius: '10px',
        width: '430px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        height: '280px',
        padding: '1rem',
        margin: '1rem',
      }}
    >
      <Typography style={{ fontFamily: 'Poppins', fontSize: '1.5rem ' }}>{title}</Typography>
      <img src={img} alt={title} width={40} style={{ background: 'white', borderRadius: '5px' }} />
      <Typography style={{ textAlign: 'center', fontFamily: 'Source Sans Pro', fontSize: '1.2rem ' }}>{desc}</Typography>
    </div>
  );
};

const FooterCards = () => {
  return (
    <>
      <div style={{ background: 'black', color: 'whitesmoke' }}>
        <section
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '6rem 6rem 5rem 6rem',
            marginTop: '6rem',
          }}
        >
          <main style={{ marginLeft: '2rem' }}>
            <Typography marginBottom={'1.2rem'} style={{ fontSize: '2.5rem', fontWeight: '500', fontFamily: 'Poppins' }}>
              Why We..
            </Typography>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
              <FooterCard
                title='Streamlined Portfolio Analysis'
                img={investmentBanking}
                desc='Analyze your holdings at a portfolio level, with data &amp; actionable insights'
              />
              <FooterCard
                title='Customizable Dashboards'
                img={dashboard}
                desc='Custom analytics dashboards for your cloud collaboration portfolio &amp; predict future with Trend analysis techniques'
              />
              <FooterCard
                title='Innovative Tech'
                img={tech}
                desc='Benefit from robust technology investment and potential to drive investment transformation ranging from mobile accessibility to an easy-to-use API'
              />
            </div>
          </main>
        </section>
      </div>
    </>
  );
};

export default FooterCards;
