import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './form.css'
// import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import RestaurantIcon from '@mui/icons-material/Restaurant';
// import Form from 'react-bootstrap/Form';

function Nbar() {

  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <img src={"https://classroomclipart.com/images/gallery/Animations/Food/chef-animation.gif"} style={{ width: "70px", borderRadius: "30px", marginRight: "25px" }} alt="" />
        <Navbar.Brand href="/">Food Ordering</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/FoodDisplay">Order Food <RestaurantIcon /> </Nav.Link>
            <Nav.Link href="/Contact">Contact</Nav.Link>
          </Nav>
          <button class="btn btn-primary" variant="outline-success" > <NavDropdown.Item href="/Login">Admin </NavDropdown.Item></button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Nbar;