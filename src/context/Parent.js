import React from 'react';
import ChildComp1 from './ChildComp1';
import {WeatherContext} from './DataTemp';


class Parent extends React.Component {
    constructor(){
        super();
        this.state = {
            temperature: '45 degree celsius'
        }
    }

    updateTemperature = () => {
        this.setState({
            temperature: '50 degree celsius'
        })
    }

    render() {
        return(
            <>
                <WeatherContext.Provider value={{val: this.state.temperature, valMethod: this.updateTemperature}}>
                    <ChildComp1 temp={this.state.temperature}/>
                </WeatherContext.Provider>
                <button onClick={this.updateTemperature}>Update temp</button>
            </>
        )
    }
}

export default Parent;
// export {WeatherContext};






// ParentComp - temperature
// childComp1 - temp
// childComp2 - temp
// child3 - temp
// child4 - temp


// Props Drilling




// Parent - (temp)
// child1 - () - temp, temp2
// child2 - (temp3) - temp, temp2
// child3 - (temp2)
// child4 - () - temp, temp3




// React Context - Provider and Consumer (useContext)