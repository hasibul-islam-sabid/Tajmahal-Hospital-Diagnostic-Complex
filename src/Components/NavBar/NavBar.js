import React, { useState } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './NavBar.css'

const NavBar = () => {

    const [stickyNav, setStickyNav] = useState(false);


    const changeSticy = () => {
        console.log(window.scrollY)
        if (window.scrollY >= 300) {
            setStickyNav(true);
        } else {
            setStickyNav(false);
        }
    }

    window.addEventListener('scroll', changeSticy)


    return (
        <>
            <div className={stickyNav ? 'fixedNav' : 'mainNav'}>
                <Navbar expand="lg" style={{ backgroundColor: '#7A392F' }} variant="dark">
                    <Container>
                        <Navbar.Brand href="#home" style={{ textTransform: 'uppercase' }}>Tajmahal Hospital</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#features">Features</Nav.Link>
                                <Nav.Link href="#pricing">Pricing</Nav.Link>
                                <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                            <Nav>
                                <Nav.Link href="#deets">More deets</Nav.Link>
                                <Nav.Link eventKey={2} href="#memes">
                                    Dank memes
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </>
    );
};

export default NavBar;