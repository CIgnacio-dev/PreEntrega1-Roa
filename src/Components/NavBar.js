import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';


let cartItemCount = 3; 


function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">BooQueen</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Ofertas</Nav.Link>
            <Nav.Link href="#pricing">Destinos</Nav.Link>
            <NavDropdown title="Paquetes" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Vuelo + Hospedaje</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Vuelo + Auto
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Vuelo + Auto + Hospedaje</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item >
                Reserva con anticipación
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Perfil</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Mis viajes
            </Nav.Link>
            <CartWidget itemCount={cartItemCount} />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   
  );
}

export default NavBar;
