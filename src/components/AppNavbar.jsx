import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const AppNavbar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className='home'>
            <Container >
                <Navbar.Brand href="/" ><h1 className='home-name'>Home</h1> </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    {/* <Nav className="me-auto">
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav> */}
                    <Nav>
                        <Nav.Link href="#/about"> <h5 className='home-items'>About Me</h5></Nav.Link>
                        <Nav.Link eventKey={2} href="#/skill"> <h5 className='home-items'>Skills</h5></Nav.Link>
                        <Nav.Link href="#/project"> <h5 className='home-items'>Projects</h5></Nav.Link>
                        <Nav.Link href="#/contact"> <h5 className='home-items'>Contact Me</h5></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default AppNavbar;