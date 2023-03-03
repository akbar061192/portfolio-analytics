import React from 'react';
import FooterCards from '../components/FooterCards';
import NavBar from '../components/NavBar';
import PortfolioAnalytics from '../components/PortfolioAnalytics';
import PortfolioServices from '../components/PortfolioServices';
import TradeMarkFooter from '../components/TradeMarkFooter';
import NewDemo from '../components/NewDemo';

const Landing = () => {
  return (
    <>
      <NavBar />
      <PortfolioServices />
      <PortfolioAnalytics />
      <NewDemo />
      <FooterCards />
      <TradeMarkFooter />
    </>
  );
};

export default Landing;
