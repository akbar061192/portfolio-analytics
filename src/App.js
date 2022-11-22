import { CssBaseline } from '@mui/material';
import './App.css';
import FooterCards from './components/FooterCards';
import NavBar from './components/NavBar';
import PortfolioAnalytics from './components/PortfolioAnalytics';
import PortfolioServices from './components/PortfolioServices';
import RequestDemo from './components/RequestDemo';
import TradeMarkFooter from './components/TradeMarkFooter';

function App() {
  return (
    <>
      <CssBaseline />
      <NavBar />
      <PortfolioServices />
      <PortfolioAnalytics />
      <RequestDemo />
      <FooterCards />
      <TradeMarkFooter />
    </>
  );
}

export default App;
