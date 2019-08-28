import{Route}from'react-router-dom';
import React, { Component } from 'react'
import Home from './Home';
import Pagevent from './pageevent';
 import Eventhome from './evnenthome'
import User from './User/user'
import addeventhome from './addeventhome';
import Itemeventhome from './Itemeventhome'
import Navuser from './User/navuser'
import Participatehome from './Participate'

export default class Routes extends Component {
    render() {
        return (
            <div>
                <Route exact path='/'component={Home}/>
                 <Route exact path='/event'component={Pagevent}/>
                  <Route exact path='/user' component={User}/> 
                  <Route exact path='/addevent' component={addeventhome}/> 
                  {/* <Route exact path='/futurevent' component={Navuser}/>   */}
                  <Route exact path="/:id" render={(props) => <Itemeventhome cin={props.match.params.id}/>}/>
            </div>
        )
    }
}
