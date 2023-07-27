// import React from 'react'

const NavBar = () => {
  return (
    <header
      id="header"
      className="fixed-top  d-flex justify-content-center align-items-center header-transparent"
    >
      <nav className="nav-menu d-none d-lg-block">
        <ul>
          <li className="active">
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#resume">Resume</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      {/* <!-- .nav-menu --> */}
    </header>
  );
};

export default NavBar;
