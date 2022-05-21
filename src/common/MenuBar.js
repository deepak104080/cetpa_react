import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import {Nav, Navbar, NavDropdown } from 'react-bootstrap';

const MenuBar = () => {
    
    
    return(
        <>
            {/* <a href="/home">Home</a>
            <a href="/todo">ToDo</a>
            <a href="/github">Github</a>
            <a href="/fn">Fn Comp</a>
            <a href="/fnapi">Fn Comp API</a> */}
            


            <div className='row bg-info bg-opacity-50'>
                <div className='col-12'>
                
                <Navbar>
                    <Link to="/contactapp" className='btn btn-outline-success'>Contact App</Link>
                    <Link to="/home" className='btn btn-outline-success'>Home</Link>
                    <Link to="/github" className='btn btn-outline-success'>Github</Link>
                    <Link to="/todo" className='btn btn-outline-success'>ToDo</Link>
                    <Link to="/fn" className='btn btn-outline-success'>Fn Comp</Link>
                    <Link to="/fnapi" className='btn btn-outline-success'>Fn Comp API</Link>
                    <Link to="/todofn" className='btn btn-outline-success'>To Do Fn</Link>
                    <Link to="/reffn" className='btn btn-outline-success'>Ref Fn</Link>
                    <Link to="/refclass" className='btn btn-outline-success'>Ref Class</Link>
                    <Link to="/emi" className='btn btn-outline-success'>EMI</Link>
                    <Link to="/formfn" className='btn btn-outline-success'>Form Fn</Link>
                    <Link to="/context" className='btn btn-outline-success'>Context</Link>
                    <Link to="/expensetracker" className='btn btn-outline-success'>Expense</Link>
                    <Link to="/hoc1" className='btn btn-outline-success'>HOC1</Link>
                    <Link to="/hoc2" className='btn btn-outline-success'>HOC2</Link>
                    <Link to="/hooklayouteffect" className='btn btn-outline-success'>Hook LayoutEffect</Link>
                    <Link to="/hookmemo" className='btn btn-outline-success'>Hook Memo</Link>
                    <Link to="/colorapp" className='btn btn-outline-success'>Color App</Link>
                    {/* <Nav.Link><Link to="/hooklayouteffect" className='btn btn-outline-success'>Hook LayoutEffect</Link></Nav.Link> */}

                    {/* <NavDropdown title="Dropdown" id="nav-dropdown" className='btn btn-outline-success'>
                        <NavDropdown.Item>-</NavDropdown.Item>
                        <NavDropdown.Item>-</NavDropdown.Item>
                        <NavDropdown.Item>-</NavDropdown.Item>
                        <NavDropdown.Item>-</NavDropdown.Item>
                    </NavDropdown> */}
                </Navbar>

                </div>
            </div>
            
        </>
    )
}

export default MenuBar;
