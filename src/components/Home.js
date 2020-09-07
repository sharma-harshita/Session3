import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div>
                Home
                <button onClick={()=>{this.props.history.push("/courses")}} >Go to Courses</button>
            </div>
        );
    }
}

export default Home;