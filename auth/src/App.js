import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Signup } from './Auth/Componenets/Signup';
import { Login } from './Auth/Componenets/Login';
import { VerifyEmail } from './Auth/Componenets/VerifyEmail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>HI</h1>} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/auth/:_id/verify/:token' element={<VerifyEmail />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
