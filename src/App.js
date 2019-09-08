import React from 'react';
import './App.css';
import NavBar from './components/Navbar';
import passporticon from './assets/passport-512.png';
import jobsearchicon from './assets/jobsearch.svg';
import WorkPermitsicon from './assets/WorkPermits.png';
import vehicleTransferIcon from './assets/vehicleTransfer.png';
import DrivingLicenceIcon from './assets/DrivingLicence1.png';

function App() {
  return (
    <div className="grid-container">
    
    <header>
    <NavBar/>
    {<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
      <polygon fill="white" points="0,100 100,0 100,100"/>
      <polygon fill="white" points="0,100 -40,0 80,100"/>
    </svg>}

    <h2>CONSULTING SERVICE FOR ALL</h2>
    <h3>Kind of bussinesses</h3>
    <p>Text before SVG. I'm some boring text. Such incredibly boring text. Who would possibly want to read such boring text?</p>
  </header>
  <h1>Our Services</h1>
  <section className="container">
  <div class="item-a"><img src={passporticon} width='50%' alt="pass"></img> <br/><span>Pass Port</span></div>
  <div class="item-b"><img src={jobsearchicon} width='50%' alt="pass"></img> <br/>Job Search</div>
  <div class="item-c"><img src={WorkPermitsicon} width='50%' alt="pass"></img> <br/>Work Permits</div>
  <div class="item-d"><img src={vehicleTransferIcon} width='50%' alt="pass"></img> <br/>Vehicle Transfer</div>
  <div class="item-e"><img src={DrivingLicenceIcon} width='50%' alt="pass"></img> <br/>Driving Licence</div>
    
  </section>
    </div>
  );
}

export default App;
