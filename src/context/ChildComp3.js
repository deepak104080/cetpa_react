import React from 'react';
import ChildComp4 from './ChildComp4';

class ChildComp3 extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            humidity: '20'
        }
    }

    render() {
        return(
            <>
            <ChildComp4 temp={this.props.temp}/>
            </>
        )
    }
}

export default ChildComp3;