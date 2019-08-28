import React,{Component} from 'react'
import '/.index.css';
import '/.event.css'
export default class Navevent extends Component{
    render() {
      return (
  
        <header id="header">
          <div className="container">
            <div id="logo" className="pull-left">
              {/* Uncomment below if you prefer to use a text logo */}
              {/* <h1><a href="#main">C<span>o</span>nf</a></h1>*/}
              <a href="#intro" className="scrollto"><img src="img/logo.png" alt="" title /></a>
            </div>
            <nav id="nav-menu-container">
              <ul className="nav-menu">
                <li className="menu-active"><a href="#intro">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#speakers">Speakers</a></li>
                <li><a href="#schedule">Schedule</a></li>
                <li><a href="#venue">Venue</a></li>
                <li><a href="#hotels">Hotels</a></li>
                <li><a href="#gallery">Gallery</a></li>
                <li><a href="#supporters">Sponsors</a></li>
                <li><a href="#contact">Contact</a></li>
                <li className="buy-tickets"><a href="#buy-tickets">Buy Tickets</a></li>
              </ul>
            </nav>{/* #nav-menu-container */}
          </div>
        </header>
      );
    }
  };