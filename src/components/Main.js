import React, { Component } from 'react'
import Navigation from './Navigation'
import {Route, Switch} from "react-router-dom";
import Home from './Home';
import Courses from './Courses';

class Main extends Component {
    
    render() {
        const value ={
            name:"Helo"
        }
        return (
            <div>
                PrepBytes
                <Navigation />
                <Switch>
                    <Route exact path = "/" component={Home}/>
                    <Route path = "/home" component={Home} />
                    <Route path = "/courses" component={Courses}/>
                </Switch>
            </div>
        )
    }
}

export default Main;




// / 
// /Home
// /Courses