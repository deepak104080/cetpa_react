import React, { createContext } from 'react';
import ChildComp3 from './ChildComp3';

class ChildComp2 extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            rainfall: '40cm'
        }
    }

    render() {
        return(
            <>
            <ChildComp3 temp={this.props.temp}/>
            </>
        )
    }
}

export default ChildComp2;