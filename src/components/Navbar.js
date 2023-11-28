import React from 'react'
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';

import Navbar from 'react-bootstrap/Navbar';

import { Link, useNavigate } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { useSelector } from 'react-redux/es/hooks/useSelector';

function NavbarComponent() {
  const nav=useNavigate()
    const store =useSelector(state=>state.Cart)
  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary flex flex-row justify-evenly  bg-gradient-to-r from-amber-200 to-teal-400 items-center">
      <Container fluid>
        <Navbar.Brand ><img className="h-12 w-20 pl-2 rounded-e-full" src='https://img.freepik.com/premium-vector/online-shop-logo-ecommerce-logo-sopping-logo_698473-15.jpg?size=626&ext=jpg'/></Navbar.Brand>
        


        <Dropdown className=' bg-sky-400'>
        <Dropdown.Toggle className=' bg-sky-400' id="dropdown-button-dark-example1" variant="secondary">
          Choose Products
        </Dropdown.Toggle>

        <Dropdown.Menu className=' bg-sky-400'>
          <Dropdown.Item onClick={()=>{nav("/Dashboard")}} active>
            All Products
          </Dropdown.Item>
          <Dropdown.Item className=' bg-sky-400' onClick={()=>{nav("/Clothes")}}> Clothes</Dropdown.Item>
          <Dropdown.Item className=' bg-sky-400' onClick={()=>{nav("/Electronics")}}> Electronics</Dropdown.Item>
          <Dropdown.Item className=' bg-sky-400' onClick={()=>{nav("/Furniture")}}> Furniture</Dropdown.Item>
          <Dropdown.Item className=' bg-sky-400' onClick={()=>{nav("/Shoes")}}>Shoes</Dropdown.Item>
          <Dropdown.Item className=' bg-sky-400' onClick={()=>{nav("/Miscellaneous")}}>Miscellaneous</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item  className=' bg-sky-400' onClick={()=>{nav("/")}}>Home</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

        <Nav.Link to="/" as={Link} className='p-4'> Home</Nav.Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse className=' justify-end'>
                <Navbar.Text className='flex flex-row '>
                <span className='font-bold text-xl text-slate-600'>{store.length}</span>
                    <Nav.Link to="/Cart" as={Link} className='flex flex-row '> <img className='h-16 w-20 rounded-full ' src='https://img.freepik.com/free-vector/shopping-cart-logo-shopping-basket-design-vector-illustration_460848-8933.jpg?size=626&ext=jpg&ga=GA1.1.767214990.1701197582&semt=ais'/> </Nav.Link> 
                </Navbar.Text>
            </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
    
  );
}


export default NavbarComponent