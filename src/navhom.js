import React, { Component } from 'react'
import './index.css';
import image from './img/logo.png';

export default class Navhome extends Component {
  constructor(props) {
    super(props);
    this.state={
      scrolled: false,
    }}
    componentDidMount() {
      
      window.addEventListener("scroll", () => {
        console.log(window.scrollY)  
        const isTop = window.scrollY < 595;
        console.log(window.scrollY) 
        if(isTop !== true) {
          this.setState({ scrolled: true })
        } else {
          this.setState({ scrolled: false })
        }
      });
    }
    // $(window).scroll(function() {
    //   if ($(this).scrollTop() > 100) {
    //     $('#header').addClass('header-scrolled');
    //   } else {
    //     $('#header').removeClass('header-scrolled');
    //   }
    // });
  
    // if ($(window).scrollTop() > 100) {
    //   $('#header').addClass('header-scrolled');
    // }
    render() {
        return (
          <header className={this.state.scrolled ? 'header-scrolled' : 'header1'}>
          <div className="container">
            <div id="logo" className="pull-left">
              {/* Uncomment below if you prefer to use a text logo */}
              {/* <h1><a href="#main">C<span>o</span>nf</a></h1>*/}
              <a href="#intro" className="scrollto"><img src={image}  width="201" height="40" alt="" title /></a>
            </div>
            <nav id="nav-menu-container">
              <ul className="nav-menu">
                <li className="menu-active"><a href="#intro">Home</a></li>
                {/* <li><a href="#about">About</a></li> */}
                <li><a href="#event">Events</a></li>
                {/* <li><a href="#speakers">Speakers</a></li>
            <li><a href="#schedule">Schedule</a></li>
            <li><a href="#venue">Venue</a></li>
            <li><a href="#hotels">Hotels</a></li>
            <li><a href="#gallery">Gallery</a></li> */}
                {/* <li><a href="#supporters">Sponsors</a></li> */}
                <li><a href="#contact">Contact</a></li>
                <li className="sign-up"><a href="">sign in</a></li>
              </ul>
            </nav>{/* #nav-menu-container */}
          </div>
        </header>
        )
    }
}
