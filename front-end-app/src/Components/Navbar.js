import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'

 const Navbar = () => {
  return (
  <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="#"></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-Link active" aria-current="page" to="#">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-Link" to="login">LOGIN</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-Link" to="about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-Link" to="contact">contact</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-Link" to="signup">Signup</Link>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
  </div>
  )
}
export default Navbar;
