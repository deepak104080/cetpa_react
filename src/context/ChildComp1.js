import React from 'react';
import ChildComp2 from './ChildComp2';

class ChildComp1 extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return(
            <>
            <ChildComp2 temp={this.props.temp}/>
            </>
        )
    }
}

export default ChildComp1;