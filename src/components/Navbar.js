import React, { Component } from "react";
import goodtimesIcon from '../assets/goodtimesIcon.ico';
 
class NavBar extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className='navbar'>

        <div className="Icon"><img src={goodtimesIcon} alt='icon' width="auto" align="middle"/> <span className="IconText">Good Times Solutions</span></div>

         {/* <div className="Icon"><img src={goodtimesIcon} width="auto" alt='icon'/>
         <span className="IconText">Good Times Solutions</span></div> */}
         <div className="nav-links">
         <a href="#"><i class="fa fa-fw fa-user"></i> Login </a>
        <a href="#"><i class="fa fa-fw fa-envelope"></i> Contact </a>
        <a href="#"><i class="fa fa-fw fa-search"></i> Search </a>
        <a class="active" href="#"> <i class="fa fa-fw fa-home"></i> Home </a>
        
         </div>
        
        </nav>
      </React.Fragment>
    );
  }
}
 
export default NavBar;