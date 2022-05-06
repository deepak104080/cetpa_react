import React from 'react';
import ChildComp1 from './ChildComp1';

const WeatherContext = React.createContext();

class Parent extends React.Component {
    constructor(){
        super();
        this.state = {
            temperature: '45 degree celsius'
        }
    }

    render() {
        return(
            <>
                <WeatherContext.Provider value={this.state.temperature}>
                    <ChildComp1 temp={this.state.temperature}/>
                </WeatherContext.Provider>
            </>
        )
    }
}

export default Parent;
export {WeatherContext};






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