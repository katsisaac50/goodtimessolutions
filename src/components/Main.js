import React from "react";
import passporticon from '../assets/passport-512.png';
import jobsearchicon from '../assets/jobsearch.svg';
import WorkPermitsicon from '../assets/WorkPermits.png';
import vehicleTransferIcon from '../assets/vehicleTransfer.png';
import DrivingLicenceIcon from '../assets/DrivingLicence1.png';

function Main() {
  return (
    <div className="container box2">
          <div style={{width: '115%', padding:'10px'}}/* className="section-heading" */>
            <h1>Our Services</h1> <br/>
          </div>
          <div class="item-a">
          <div style={{textAlign: 'center'}}>
      <img  src={passporticon} width='50%' alt="pass"></img> 
    </div>
            <br/>
            <h4>PassPort</h4>
            <p>We help you to process new PassPort and renew of Old one provided you hold a national ID</p>
          </div>
          <div class="item-b">
          <div class="img-container"> 
          <img src={jobsearchicon} width='50%' alt="pass"></img>
          </div><br/>
             
            <h4>TIN number</h4>
            <p>We help to Process the new Tin number or make changes in your user tin number, in either a name /password.</p>
          </div>
          <div class="item-c">
            <img src={WorkPermitsicon} width='50%' alt="pass"></img> <br/>
            <h4>Work Permits</h4>
            <p>To process work permits to foreigners in uganda</p>
          </div>
          <div class="item-d">
            <img src={vehicleTransferIcon} width='50%' alt="pass"></img> <br/>
            <h4>Vehicle Transfer</h4>
            <p>To make vehicle transfers, change from ones name to another name</p>
          </div>
          <div class="item-e">
            <img src={DrivingLicenceIcon} width='50%' alt="pass"></img> <br/>
            <h4>Driving Licence</h4>
            <p>We help to process the new & Renewal of the old ones.</p>
          </div>
    </div>
  );
}

export default Main;