import { CssBaseline } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Landing from './pages/Landing';
import NewAccount from './pages/NewAccount';
import SignIn from './pages/SignIn';

function App() {
  return (
    <>
      <CssBaseline />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/newAccount' element={<NewAccount />} />
        <Route path='/signIn' element={<SignIn />} />
      </Routes>
    </>
  );
}

export default App;
