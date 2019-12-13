import React from "react";
import EmailIcon from '../assets/email-icon.png';
import LocationIcon from '../assets/location.png';
import PhoneIcon from '../assets/phone-icon.png';

function Footer() {
  return (
    <footer className="container box3"> 
    <h2 className="intouch">GET IN TOUCH</h2>
    <div className="subhd">
    <div class="column"> 
                <p className="subheading"><img src={LocationIcon} className="imghd" alt="pass"></img> ADDRESS</p> 
                <ul /* style={{ listStyleType: "disc" }} */> 
                    <li>Wakiso, Kayembe</li>
                    <li>Open: Monday - Sunday 8:00 AM to 8:00 PM</li>  
                </ul> 
            </div> 
                
            <div class="column">
                            <p className="subheading"><img src={PhoneIcon} width='10%' alt="pass"></img> PHONE</p> 
                <ul> 
                    <li>Mobile: +256786093304</li> 
                    <li>Mobile: +256703076920</li>
                </ul> 
            </div> 
                 
            <div class="column"> 
            <div class="img-container"> 
          
          </div><br/>
                <p className="subheading"><img src={EmailIcon} width='15%' alt="pass"></img>EMAIL</p> 
                <ul > 
                    <li></li> 
                     
                </ul> 
            </div> 
    </div>
            
        </footer>
  );
}

export default Footer;