import React from 'react';
import { Typography } from '@mui/material';
import investmentBanking from '../assets/investment-banking.png';
import dashboard from '../assets/dashboard.png';
import tech from '../assets/tech.png';

const FooterCard = props => {
  const { title, img, desc, bg } = props;
  return (
    <div
      style={{
        // background: 'linear-gradient(150deg, #13f1fc, #0470dc 100%)',
        background: bg,
        border: '1px solid black',
        borderRadius: '10px',
        width: '380px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        height: '280px',
        padding: '1rem',
        margin: '1rem',
        fontWeight: 'bolder',
        opacity: '0.9',
      }}
    >
      <Typography style={{ fontFamily: 'Poppins', fontSize: '1.5rem', textAlign: 'center' }}>{title}</Typography>
      <img src={img} alt={title} width={40} style={{ borderRadius: '5px' }} />
      <Typography style={{ textAlign: 'center', fontFamily: 'Source Sans Pro', fontSize: '1rem ' }}>{desc}</Typography>
    </div>
  );
};

const FooterCards = () => {
  return (
    <>
      <div>
        <section
          style={{
            marginTop: '3rem',
          }}
        >
          <main>
            <Typography
              marginBottom={'1.2rem'}
              style={{ fontSize: '2rem', fontWeight: '500', fontFamily: 'Poppins', marginLeft: '3.5rem' }}
            >
              Why We..
            </Typography>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
              <FooterCard
                bg='linear-gradient(150deg, #17ead9, #6078ea 100%)'
                title='Streamlined Portfolio Analysis'
                img={investmentBanking}
                desc='Analyze your holdings at a portfolio level, with data &amp; actionable insights'
              />
              <FooterCard
                bg='linear-gradient(150deg, #f65599, #4d0316 100%)'
                title='Customizable Dashboards'
                img={dashboard}
                desc='Custom analytics dashboards for your cloud collaboration portfolio &amp; predict future with Trend analysis techniques'
              />
              <FooterCard
                bg='linear-gradient(150deg, #10dcf6, #0470dc 100%)'
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
