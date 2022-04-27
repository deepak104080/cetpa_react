import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import logo from '../assets/altudo.png'

const Header = () => {
    
    
    return(
        <>
            <div className='row bg-success bg-opacity-75 app-header'>
                <div className='col-12'>
                    
                    <img src={logo}/>
                    {!logo && <div>Altudo</div>}
                </div>
            </div>
            
        </>
    )
}

export default Header;
