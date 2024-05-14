import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

{
  /* The following line can be included in your src/index.js or App.js file */
}

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">JCarrollOnline</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav >
            <Nav.Item>
              <Nav.Link href="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#users">Users</Nav.Link>
            </Nav.Item>
            <Nav.Link href="#fora">Fora</Nav.Link>
            <Nav.Item>
              <Nav.Link href="#profile">Profile</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#about">About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#sandbox">Sandbox</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#yellowstone">Yellowstone</Nav.Link>
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

/*
import NavDropdown from 'react-bootstrap/NavDropdown';
{                 <NavDropdown title="Dropdown" id="basic-nav-dropdown">
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
}


{ <nav class="navbar fixed top navbar-toggleable-md navbar-inverse bg-inverse">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
            @Html.ActionLink("JCarrollOnline", "Index", "Home", new { area = "" }, new { @class = "navbar-brand" })
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                <li>@Html.ActionLink("Home", "Index", "Home", new { area = "" }, new { @class = "nav-link" })</li>
                <li>@Html.ActionLink("Users", "Index", "Users", new { area = "" }, new { @class = "nav-link" })</li>
                <li>@Html.ActionLink("Fora", "Index", "Fora", new { area = "" }, new { @class = "nav-link" })</li>
                <li>@Html.ActionLink("Profile", "Details", "Users", new { userId = User.Identity.GetUserId() }, new { @class = "nav-link" })</li>
                <li>@Html.ActionLink("About", "About", "Home", new { area = "" }, new { @class = "nav-link" })</li>
                <li>@Html.ActionLink("Contact", "Contact", "Home", new { area = "" }, new { @class = "nav-link" })</li>
                <li>@Html.ActionLink("Sandbox", "Index", "Sandbox", new { area = "" }, new { @class = "nav-link" })</li>
                <li>@Html.ActionLink("Yellowstone Slideshow", "YellowStoneSlideShow", "Sandbox", new { area = "" }, new { @class = "nav-link" })</li>
                @if (User.IsInRole("Administrator"))
                {
                    <li>@Html.ActionLink("Blog", "Index", "Blog", new { area = "" }, new { @class = "nav-link" })</li>
                }
            </ul>
            @Html.Partial("_LoginPartial")
        </div>
    </nav> }
    
        <ul class="nav navbar-nav navbar-right">
        <li>
            @Html.ActionLink("Hello " + User.Identity.GetUserName() + "!", "Index", "Manage", new { area = "" }, new { @class = "nav-link" })
        </li>
        <li><a class="nav-link" href="javascript:document.getElementById('logoutForm').submit()">Log off</a></li>
    </ul>*/