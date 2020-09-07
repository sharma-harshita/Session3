import React from 'react';

const Hoc = (WrappedComponent) =>{
    class EnhancedComponent extends React.Component{
        state= {
            a:"Test"
        }
        render(){
            return(
                <WrappedComponent {...this.state}/>
            )
        }
    }

    return EnhancedComponent
}

export default Hoc;
