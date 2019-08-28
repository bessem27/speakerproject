import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import{connect} from 'react-redux'


class Navuser extends Component {
  
  
    render() {
    const {PartcipateReducer}=this.props
    {console.log(PartcipateReducer)}
        return (
          <div>
            <div className="body">
          <div className="logo">
				<i className="fa fa-tachometer"></i>
				<span>Brand</span>
			</div>
      <div className="header">
			<div className="logo">
				<i className="fa fa-tachometer"></i>
				<span>Brand</span>
			</div>
			<a href="#" className="nav-trigger"><span></span></a>
		</div>
    <div className="side-nav">
          <nav>
          <ul>
            <li>
              <Link to="/user">
                <span><i className="fa fa-user" /></span>
                <span>Users</span>
              </Link>
            </li>
            <li>
              
              <Link to="/futurevent">
                <span><i className="fa fa-calendar" /></span>
                <span>Your Event</span>
                </Link>
              
              
            </li>
            <li className="active">
              <Link to="/addevent">
                <span><i className="fa fa-paper-plane"/></span>
                <span>ADD Event</span>
              </Link>
            </li>
            <li>
              <a href="#">
                <span><i className="fa fa-pencil-square-o" /></span>
                <span>Edit Event</span>
              </a>
            </li>
          </ul>
        </nav>
        </div>
        <div className='bodyuser '>  
          {/* {this.props.children} */}
         { PartcipateReducer.filter((el,index)=>el.participer ==='true').map((el,index)=> <div>
            <img src={el.img} className="card-img-top" alt="" width={290} height={190} />
            <div className="card-body">
              <h5 className="card-title">{el.text}</h5>
              <p className="card-text">{el.title}</p>
              <p className="card-text"><small className="text-muted">{el.time}</small></p>
              {/* <div id="participer" >
                    <button  type="submit">Participer</button>
                  </div>  */}   
             </div>
            </div>
         )}
        </div>
        </div>
        </div>
        )
    }
  }

const mapStateToProps = (state) => {
  return {
      PartcipateReducer: state.Listevent
  }
}

export default connect(mapStateToProps)(Navuser);