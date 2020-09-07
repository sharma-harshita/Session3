import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'

class Navigation extends Component {
    render() {
        const activeStyle= "#F15B2A"
        return (
            <div>
                <NavLink to ="/home" activeStyles={activeStyle}>Home</NavLink>   |   
                <NavLink to ="/courses" activeStyles={activeStyle}>Courses</NavLink>
            </div>
        );
    }
}

export default Navigation;