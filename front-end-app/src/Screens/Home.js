import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Calculator from '../Components/Calculator'
import  Carousal from '../Components/Carousal'
import 'bootstrap-dark-5/dist/css/bootstrap-dark.min.css';

export const Home = () => {
  return (
    <div>
   <div><Navbar/></div>
   <div><Calculator/></div>
  
    <div><Footer/></div>

    </div>
  )
}
