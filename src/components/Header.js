import React from "react";
import NavBar from './Navbar';

function Header() {
  return (
    <div className="container box1">
      <header>
          <NavBar/>
          {<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
            <polygon fill="white" points="0,100 100,0 100,100"/>
            <polygon fill="white" points="0,100 -40,0 80,100"/>
          </svg>}
          <div style={{padding: '20px'}}>
          <h1 className="text-heading">CONSULTING SERVICE FOR ALL</h1>
          <div style={{textAlign: 'center'}}>
            <h3>Our Mission</h3>
            <p>we are here to serve you</p>
          </div>
          
          </div>
          
      </header>
    </div>
  );
}

export default Header;