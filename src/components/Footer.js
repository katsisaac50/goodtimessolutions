import React from "react";

function Footer() {
  return (
    <footer className="container box3"> 
    <h2>GET IN TOUCH</h2>
            <div class="column"> 
                <p>ADDRESS</p> 
                <ul style={{ listStyleType: "disc" }}> 
                    <li>About Us</li> 
                    <li>Careers</li> 
                    <li>Privacy Policy</li> 
                    <li>Contact Us</li> 
                </ul> 
            </div> 
                
            <div class="column"> 
                <p>PHONE</p> 
                <ul> 
                    <li>Algorithms</li> 
                    <li>Data Structures</li> 
                    <li>Languages</li> 
                    <li>CS Subjects</li> 
                    <li>Video Tutorials</li> 
                </ul> 
            </div> 
                 
            <div class="column"> 
                <p>EMAIL</p> 
                <ul> 
                    <li>Company-wise</li> 
                    <li>Topic-wise</li> 
                    <li>Contests</li> 
                    <li>Subjective Questions</li> 
                </ul> 
            </div> 
        </footer>
  );
}

export default Footer;