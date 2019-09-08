import React, { Component } from "react";
import goodtimesIcon from '../assets/goodtimesIcon.png';
 
class NavBar extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className='navbar'>
        <img src={goodtimesIcon} width="10%" height="10%" alt='icon'/>
        <a href="#"><i class="fa fa-fw fa-user"></i> Login </a>
        <a href="#"><i class="fa fa-fw fa-envelope"></i> Contact </a>
        <a href="#"><i class="fa fa-fw fa-search"></i> Search </a>
        <a class="active" href="#"> <i class="fa fa-fw fa-home"></i> Home </a>
      
        </nav>
      </React.Fragment>
    );
  }
}
 
export default NavBar;