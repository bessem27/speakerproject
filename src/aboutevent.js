import React,{Component} from 'react'
export default class Aboutevent extends Component {
    render(){
        return (
            <section id="about">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <h2>About The Event</h2>
                  <p>MyData 2019 conference is a place for accelerating global change towards a human-centric approach to personal data. On 25-27 September 2019, some 1000 experts from business, legal, tech and society sectors will gather for the fourth time in Helsinki, with the focus on how to effect the change we need.</p>
                </div>
                <div className="col-lg-3">
                  <h3>Where</h3>
                  <p> Wanha Satama in central Helsinki, Finland</p>
                </div>
                <div className="col-lg-3">
                  <h3>When</h3>
                  <p> Wednesday to Friday<br />25-27 September</p>
                </div>
              </div>
            </div>
            
            </section> 
        )
      }
    }