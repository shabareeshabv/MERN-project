import React from 'react';
import SignUp from './Components/SignUp';  // Note the default import
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { Home } from './Screens/Home';
import { Login } from './Components/Login';
import Aboutpage from './Aboutpage';
import Contact from './Components/Contact';

import{
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';



const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path='/' element={<Home/>}/> 
          <Route exact path='login' element={<Login/>}/> 
          <Route exact path='footer' element={<Footer/>}/> 
          <Route exact path='about'  element={<Aboutpage/>}/>
          <Route exact path='contact'  element={<Contact/>}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
