import React,{Component} from 'react'
import Aboutevent from './aboutevent'
import Introevent from './introevent'
import Navevent from './nav-event'
// import 'index.css'

export default class Pagevent extends Component {
    render(){
        return  (<div className="Event">
         
         <Navevent/>
         
         <Introevent/>
         <Aboutevent/>
         
         </div>)
    }
}
