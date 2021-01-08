import React from 'react'

import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavbarToggle from 'react-bootstrap/NavbarToggle'
import NavDropdown from 'react-bootstrap/NavDropdown'
import NavbarBrand from 'react-bootstrap/NavbarBrand'
import NavbarCollapse from 'react-bootstrap/NavbarCollapse'
import Button from 'react-bootstrap/Button'
import NavItem from 'react-bootstrap/esm/NavItem'

const SwapiNav = ({ dataType, setDataType, pageNum, setPageNum}) => {

    return(
        <>
            <Navbar bg="warning" expand="lg">
                <NavbarBrand href="#home">SWAPI React UI - {dataType}</NavbarBrand>
                <NavbarToggle aria-controls="basic-navbar-nav" />
                <NavbarCollapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <NavDropdown title="Select Data Type" id="basic-nav-dropdown">
                            <NavDropdown.Item 
                                onSelect={()=>setDataType('People')}
                            >
                                People
                            </NavDropdown.Item>
                            <NavDropdown.Item 
                                onSelect={()=>setDataType('Planets')}
                            >
                                Planets
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav className='ml-auto'>
                        <Button
                            variant='dark'
                            onClick={()=>{
                                setPageNum(currentNum => Math.max(currentNum-1, 1))
                            }}
                        >
                            Previous Page
                        </Button>
                        <NavItem>Page {pageNum}</NavItem>
                        <Button
                            variant='dark'
                            onClick={()=>{
                                setPageNum(currentNum => currentNum+1)
                            }}
                        >
                            Next Page
                        </Button>
                    </Nav>
                </NavbarCollapse>
            </Navbar>
        </>
    )
}

export default SwapiNav