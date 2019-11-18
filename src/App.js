import React from 'react';
import './App.css';
import NavBar from './components/Navbar';
import passporticon from './assets/passport-512.png';
import jobsearchicon from './assets/jobsearch.svg';
import WorkPermitsicon from './assets/WorkPermits.png';
import vehicleTransferIcon from './assets/vehicleTransfer.png';
import DrivingLicenceIcon from './assets/DrivingLicence1.png';
import goodtimesIcon from './assets/goodtimesIcon.png';

function App() {
  return (
    <div className="wrapper">
      <div class="container box1">
        <header>
          <NavBar/>
          {<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
            <polygon fill="white" points="0,100 100,0 100,100"/>
            <polygon fill="white" points="0,100 -40,0 80,100"/>
          </svg>}
          <div style={{padding: '20px'}}>
          <h1 className="text-heading">CONSULTING SERVICE FOR ALL</h1>
          <h3>Our Mission</h3>
          <p>we are here to serve you</p>
          </div>
          
        </header>
      </div>
    
    <div className="container box2">
          <div style={{width: '115%'}}/* className="section-heading" */>
            <h1>Our Services</h1> <br/>
          </div>
          <div class="item-a">
            <img src={passporticon} width='50%' alt="pass"></img> <br/>
            <h4>PassPort</h4>
            <p>We help you to process new PassPort and renew of Old one provided you hold a national ID</p>
          </div>
          <div class="item-b">
            <img src={jobsearchicon} width='50%' alt="pass"></img> <br/>
            <span>TIN number</span>
          </div>
          <div class="item-c">
            <img src={WorkPermitsicon} width='50%' alt="pass"></img> <br/>
            <span>Work Permits</span>
          </div>
          <div class="item-d">
            <img src={vehicleTransferIcon} width='50%' alt="pass"></img> <br/>
            <span>Vehicle Transfer</span>
          </div>
          <div class="item-e">
            <img src={DrivingLicenceIcon} width='50%' alt="pass"></img> <br/>
            <span>Driving Licence</span>
          </div>
    </div>
    </div>
  );
}

export default App;
