import React, { Component } from 'react'
import {connect} from 'react-redux'
import Itemeventhome from './Itemeventhome'

 class Eventhome extends Component {
  
    render() {
      const {eventReducer}=this.props
        return (
            <div>
                  <section id="event" className="section-bg ">
                <div className="section-header header-event">
                    <h2 >Events</h2>
                  </div>
                 <div className=" row row-event"> 
                 
                {
                    
                  
                    eventReducer.map((el,i)=><div className="card col-lg-3 col-md-5"><Itemeventhome key={i} event={el} /> </div>)
                   
                }
                </div>
           </section>
           {eventReducer.filter(el => el.participer === 'true').map(x => (
             <h1>x.title</h1>
           ))}
            </div>
            
        )
    }}
    const mapStateToProps = (state) => {
        return {
            eventReducer: state.Listevent
        }
      }
      
      export default connect(mapStateToProps)(Eventhome);
      