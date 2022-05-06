import React from 'react';
import { WeatherContext } from './Parent';

class ChildComp4 extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return(
            <>
            Temperature = {this.props.temp}
            <br></br>

            <WeatherContext.Consumer>
                {
                    (temp) => {
                        return (
                            <>
                            Temperature = {temp}
                            </>
                        )
                    }
                }
            </WeatherContext.Consumer>


            </>
        )
    }
}

export default ChildComp4;