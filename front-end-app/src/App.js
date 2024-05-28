import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { Home } from './Screens/Home';
import Login from './Components/Login';
import Aboutpage from './Aboutpage';
import Contact from './Components/Contact';
import SignUp from './Screens/SignUp';

const App = () => {
  return (
    <Router>
      <div>
        
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/footer' element={<Footer />} />
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<Aboutpage />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
       
      </div>
    </Router>
  );
};

export default App;
