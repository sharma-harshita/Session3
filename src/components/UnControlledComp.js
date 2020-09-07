import React, { Component } from 'react';

class UnControlledComp extends Component {
    constructor(){
        super()

        this.inputRef = React.createRef()
    }

    showRef =()=>{
        console.log(this.inputRef.current.value);
    }

    render() {
        return (
            <div>
                UnControlledComp
                Name:
                <input type="text" ref = {this.inputRef} />
                <button onClick ={this.showRef}>Click to see Ref</button>
            </div>
        );
    }
}

export default UnControlledComp;



