import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';


function NavBar() {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">HardwareStore</Navbar.Brand>
          <Nav className="me-auto">
            <Link className='nav-link' to="/">Inicio</Link>
            <Link className='nav-link' to="/productos/Lacteos">Lacteos</Link>
            <Link className='nav-link' to="/productos/Carnes">Carnes</Link>
            <Link className='nav-link' to="/productos/Comestibles">Comestibles</Link>
          </Nav>
        </Container>
        <CartWidget />
      </Navbar>
    </>
  );
}

export default NavBar;