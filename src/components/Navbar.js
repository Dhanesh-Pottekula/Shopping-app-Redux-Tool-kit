import React from 'react'
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from 'react-bootstrap/Navbar';

import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { useSelector } from 'react-redux/es/hooks/useSelector';

function NavbarComponent() {
    const store =useSelector(state=>state.Cart)
  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary ">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Nav.Link to="/Dashboard" as={Link} className='p-4'> Products</Nav.Link>
        <Nav.Link to="/" as={Link} className='p-4'> Home</Nav.Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse className=' justify-end'>
                <Navbar.Text>
                    <Nav.Link to="/Cart" as={Link}> My Bag {store.length}</Nav.Link> 
                </Navbar.Text>
            </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
    
  );
}


export default NavbarComponent