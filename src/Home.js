import React, { Component } from 'react'
import{Link}from'react-router-dom'
import Navhome from './navhom';
import Introhome from './introhome';
import Eventhome from './evnenthome';
import Subscribehome from './subscriphom';
import ContactHome from './contacthome';
import Footerhome from './footerhom';
import Addevent from './addeventhome'
import event1 from './img/event1.jpg'
import event2 from './img/event2.jpg'
import event3 from './img/event3.jpg'
import event4 from './img/event4.jpg'
import event5 from './img/event4.jpg'
import event6 from './img/event4.jpg'

const tab=[{
  img:event1,
  title:'Public Speaking',
  text:'lordkjgkdqlhql qdk kqdng gq gqkngqd hqkd gn',
  time:'Last updated 3 mins ago'

},
{
  img:event2,
  title:'Public Speaking',
  text:'lordkjgkdqlhql qdk kqdng gq gqkngqd hqkd gn',
  time:'Last updated 3 mins ago'
},
{
  img:event3,
  title:'Public Speaking',
  text:'lordkjgkdqlhql qdk kqdng gq gqkngqd hqkd gn',
  time:'Last updated 3 mins ago'
},
{
  img:event4,
  title:'Public Speaking',
  text:'lordkjgkdqlhql qdk kqdng gq gqkngqd hqkd gn',
  time:'Last updated 3 mins ago'
},
{
  img:event5,
  title:'Public Speaking',
  text:'lordkjgkdqlhql qdk kqdng gq gqkngqd hqkd gn',
  time:'Last updated 3 mins ago'
},{
  img:event6,
  title:'Public Speaking',
  text:'lordkjgkdqlhql qdk kqdng gq gqkngqd hqkd gn',
  time:'Last updated 3 mins ago'
}]



export default class Home extends Component {
    render() {
        return (
             <div className="App">
                <Navhome/>
                 <Introhome/>
                 <Eventhome eventReducer={tab}/>
                 <Subscribehome/>
                 <ContactHome/>
                 <Footerhome/>
                 
                 
                 
                 
             </div>
        )
    }
}
// the secaonde commit