import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { isLoggedIn } from './api';
import React, { useState } from 'react';

{
  /* The following line can be included in your src/index.js or App.js file */
}

const NavBar = () => {
  //const isUserLoggedIn = isLoggedIn();
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  React.useEffect(() => {
    const loadLoggedState = async () => {
        setIsUserLoggedIn(isLoggedIn());
    }
    loadLoggedState();
}, []);

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">JCarrollOnline</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav >
            <Nav.Item>
              <Nav.Link href="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/users">Users</Nav.Link>
            </Nav.Item>
            <Nav.Link href="/fora">Fora</Nav.Link>
            <Nav.Item>
              <Nav.Link href="/profile">Profile</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/about">About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/sandbox">Sandbox</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/yellowstone">Yellowstone</Nav.Link>
            </Nav.Item>
          </Nav>
          <Nav className='ms-auto'>
            {isUserLoggedIn ?
              <div>
                <Nav.Item className='ml-auto'>
                  <Nav.Link href="/logout">Log out</Nav.Link>
                </Nav.Item>

              </div> :
                <>
              <div>
                  <Nav.Item className='ms-auto'>
                    <Nav.Link href="/register">Register</Nav.Link>
                  </Nav.Item>
                </div>
                <div>
                  <Nav.Item className='ml-auto'>
                    <Nav.Link href="/login">Log in</Nav.Link>
                  </Nav.Item>
              </div>
                </>
              }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
