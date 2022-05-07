import React from 'react';
import ChildComp5 from './ChildComp5';
import { WeatherContext } from './DataTemp';

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
                            Temperature = {temp.val}
                            <br>
                            </br>
                            <button onClick={temp.valMethod}>Update temp</button>
                            </>
                        )
                    }
                    
                }
            </WeatherContext.Consumer>
                <br></br>
            <ChildComp5 />
            </>
        )
    }
}

export default ChildComp4;