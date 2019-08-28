import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import{connect} from 'react-redux'
import './index.css'
import Navuser from './User/navuser'
class Addevent extends Component {
    state={ 
        img: '',
        title: '',
        text: ''
        }
   handelChange=(event)=>
    {
     
      this.setState({
[event.target.name]:event.target.value
      })
    }
 Add=()=>{
    this.props.addredoucer({...this.state})
 }
    render() {
        return (
        <Navuser>
            <div className="container-contact100">

<div className="wrap-contact100">
            <div className="contact100-form-title">
        <span className="contact100-form-title-1">
        <h1>Add Event</h1>
        </span>
    </div>
            <div className="contact100-form">
              <span className="label-input100">image</span>
                <input   placeholder="Enter your EventImage" className="input100" type='name' name='img'onChange={this.handelChange} />
                <span className="focus-input100" ></span>
                <span className="label-input100">Title</span>
                <input   placeholder="Enter your EventTitle" className="input100" type='name' name='title'onChange={this.handelChange} />
                <span className="focus-input100"></span>
                <span className="label-input100">Descreption</span>
                <input   placeholder="Enter your EventDescreption" className="input100" type='name' name='text'onChange={this.handelChange} />
                <span className="focus-input100"></span>
    
                {/* <div>
                    <Link to=''>
                <button onClick={this.Add}>Add event</button>
                </Link>
                </div> */}
                <div className="container-contact100-form-btn">
                <Link to='/'>
					<button onClick={this.Add} className="contact100-form-btn">
						<span>
							Submit
						</span>
					</button>
                    </Link>
				</div>
                </div>
                </div>
                </div>
        </Navuser>
        );
    }
}
const mapDispatchToprops=(dispatch)=>{
    return{
        addredoucer:event=>{

            dispatch({type:'ADD-CONTACT',
            event})
        }
    }
}
export default connect(null,mapDispatchToprops)(Addevent)

// { <div className="container-contact100">

// <div className="wrap-contact100">
//     <div className="contact100-form-title" style="background-image: url(images/bg-01.jpg);">
//         <span className="contact100-form-title-1">
//             Contact Us
//         </span>

//         <span className="contact100-form-title-2">
//             Feel free to drop us a line below!
//         </span>
//     </div>

//     <div classname="container-contact100">
//         <div classname="wrap-contact100">
//           <div classname="contact100-form-title" >
//             <span classname="contact100-form-title-1">
//               Contact Us
//             </span>
//             <span classname="contact100-form-title-2">
//               Feel free to drop us a line below!
//             </span>
//           </div>
//           <form classname="contact100-form validate-form">
//             <div classname="wrap-input100 validate-input" data-validate="Name is required">
//               <span classname="label-input100">image</span>
//               <input classname="input100" type="text" name="img" placeholder="Enter full name" onchange="{this.handelChange}/" />
//               <span classname="focus-input100" />
//             </div>
//             <div classname="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
//               <span classname="label-input100">title</span>
//               <input classname="input100" type="text" name="title" placeholder="Enter email addess" onchange="{this.handelChange}/" />
//               <span classname="focus-input100" />
//             </div>
//             <div classname="wrap-input100 validate-input" data-validate="Phone is required">
//               <span classname="label-input100">Descreption</span>
//               <input classname="input100" type="text" name="text" placeholder="Enter phone number" onchange="{this.handelChange}/" />
//               <span classname="focus-input100" />
//             </div>
//           </form> </div> </div> </div> </div> }