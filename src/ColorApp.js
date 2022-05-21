import React, { useState, useContext } from 'react';
import {DataAppContext} from './DataApp';

const ColorApp = () => {
    const localContext = useContext(DataAppContext);
    const colors = [
        {
            name: 'blue',
            label: 'Blue',
            color: '#78d6f5'
        },
        {
            name: 'green',
            label: 'Green',
            color: '#4df0a6'
        },
        {
            name: 'red',
            label: 'Red',
            color: '#fc805d'
        }
    ];
    const [activeColor, setActiveColor] = useState('');

    const setColor = (color) => {
        setActiveColor(color);
        localContext.updateBgColor(color);
    }

    return(
        <>  
        <div style={{'background': activeColor}}>
            <h2>Color App</h2>
            {colors && colors.map((temp, index) => (
                <span key={temp.name + index} className={`tile-${temp.name}`} style={{'background': temp.color}} onClick={() => setColor(temp.color)}>{temp.label}</span>
            ))}
            <br></br><br></br>
            Active Color - {activeColor}
            <br></br><br></br>
            <span className='tile' style={{'background': activeColor}}>New Box</span>
            <br></br><br></br>
            </div>
        </>
    )
}

export default ColorApp;