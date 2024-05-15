import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

{
  /* The following line can be included in your src/index.js or App.js file */
}

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/home">JCarrollOnline</Navbar.Brand>
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
            <Nav.Item className='ms-auto'>
              <Nav.Link href="/register">Register</Nav.Link>
            </Nav.Item>
            <Nav.Item className='ml-auto'>
              <Nav.Link href="/login">Log in</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
