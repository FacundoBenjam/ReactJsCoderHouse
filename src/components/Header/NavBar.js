import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';


function NavBar() {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <CartWidget />
          <Navbar.Brand href="#home">HardwareStore</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="/productos/Lacteos">Lacteos</Nav.Link>
            <Nav.Link href="/productos/Carnes">Carnes</Nav.Link>
            <Nav.Link href="/productos/Comestibles">Comestibles</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;