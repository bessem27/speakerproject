import React, { Component } from 'react'
import{connect} from 'react-redux'
class Participatehome extends Component {
    state={ }
    partcipatefunction=()=>{
     this.props.participateredoucer(this.state)
 }
    render() {
        const {event}=this.props
        return (
            
            <div>
                
    
            <img src={event.img} className="card-img-top" alt="" width={290} height={190} />
            <div className="card-body">
              <h5 className="card-title">{event.text}</h5>
              <p className="card-text">{event.title}</p>
              <p className="card-text"><small className="text-muted">{event.time}</small></p>
              {/* <div id="participer" >
                    <button  type="submit">Participer</button>
                  </div>  */}
                  
                  
                  <button onClick={this.partcipatefunction} type="button" className="btn btn-danger participer">Participer</button>
                  
                  
            </div>
            </div>
            
    
          
        )
    }
}
const mapDispatchToprops=(dispatch)=>{
    return{
        participateredoucer:cin=>{

            dispatch({
                type:'PARTICIPER',
                cin
                     })
        }
    }
}
export default connect(null,mapDispatchToprops)(Participatehome)