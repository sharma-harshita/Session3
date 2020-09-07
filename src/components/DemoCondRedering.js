import React, { Component } from 'react';
import Comp1 from './Comp1';
import Comp2 from './Comp2';

class DemoCondRedering extends Component {
    state={
        showComp1:true
    }

    render() {
        return (
            <div>
                {/* {this.state.showComp1 && <Comp1/>} */}
                {this.state.showComp1 == true ? <Comp1/> : <Comp2/>}
            </div>
        );
    }
}

export default DemoCondRedering;