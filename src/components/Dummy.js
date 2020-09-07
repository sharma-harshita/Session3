import React, { PureComponent } from 'react';
import RegularComp from './RegularComp';
import PureComp from './PureComp';

class Dummy extends PureComponent {
    state = {
        a:"Test",
        userInfo:"Test1"
    }
    componentDidMount(){
        setInterval(() => {
            this.setState({a:"Test"})
        }, 2000);
    }
    render() {
        console.log("In dummy");
        return (
            <div>
                Dummy Component
                <RegularComp userInfo = {this.state.userInfo} />
                <PureComp {...this.state} />
            </div>
        );
    }
}

export default Dummy;