import React, { PureComponent } from 'react';

class PureComp extends PureComponent {
    render() {
        console.log("In Pure");
        return (
            <div>
                Pure Component
            </div>
        );
    }
}

export default PureComp;