import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import {Nav, Navbar } from 'react-bootstrap';

const MenuBar = () => {
    
    
    return(
        <>
            {/* <a href="/home">Home</a>
            <a href="/todo">ToDo</a>
            <a href="/github">Github</a>
            <a href="/fn">Fn Comp</a>
            <a href="/fnapi">Fn Comp API</a> */}
            


            <div className='row bg-warning'>
                <div className='col-12'>
                

                <Navbar bg="light" expand="lg">
                    <Nav.Link><Link to="/home">Home</Link></Nav.Link>
                    <Nav.Link><Link to="/github">Github</Link></Nav.Link>
                    <Nav.Link><Link to="/todo">ToDo</Link></Nav.Link>
                    <Nav.Link><Link to="/fn">Fn Comp</Link></Nav.Link>
                    <Nav.Link><Link to="/fnapi">Fn Comp API</Link></Nav.Link>
                </Navbar>

                </div>
            </div>


            
        </>
    )
}

export default MenuBar;
