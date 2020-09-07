import React, { Component } from 'react';
import Hoc from './Hoc';

class Comp1 extends Component {
    render() {
        return (
            <div>
                {this.props.a}
            </div>
        );
    }
}

export default Hoc(Comp1);