import React, { Component } from 'react'
export default class Introevent extends Component{
    render(){
      return (
        <div>
          <section id="intro">
            <div className="intro-container ">
              <h1 className="mb-4 pb-0">My Data<br /><span>2019</span> Conference</h1>
              <p className="mb-4 pb-0">25-27 September 2019,  Wanha Satama in central Helsinki, Finland</p>
              <a href="https://www.youtube.com/watch?v=4Hksel0DMYY" className="venobox play-btn mb-4" data-vbtype="video" data-autoplay="true" />
              <a href="#about" className="about-btn scrollto">About The Event</a>
            </div>
          </section>
          {/* <main id="main"> */}
          {/* </main>*/}</div> 
      );
    }
  }