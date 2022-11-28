import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Carousel from 'react-bootstrap/Carousel';
import food from './Image/food.jpg';
import milk from './Image/milk.jpg';
import eat from './Image/eat.jpg';
import Logo from './Image/logo.png';



const Header = () => {
  return (
   <>
  {/* Navbar And Menu */}

     <Navbar bg="dark" variant="dark" className="Navbar">
        <Container>
          <Navbar.Brand href="#home" className="brand" style={{fontSize:'2.3rem'}}>
          Food Wala 
          <img src={Logo} className="logo"/>
          </Navbar.Brand>
          <Nav className="me-auto Link_items" style={{marginLeft:'40%'}}>
            <Nav.Link href="#home" className="home">Home</Nav.Link>
            <Nav.Link href="#Recipes" className="Recioes">Recipes</Nav.Link>
            <Nav.Link href="#pricing" className="pricing">Pricing</Nav.Link>
            <Nav.Link href="#order" className="order">Order</Nav.Link>
          </Nav>
          <Nav><input type="text" placeholder="Search Items"/></Nav>
          <Nav>
            <Nav.Link href="#login" >Login</Nav.Link>
          </Nav>
          
        </Container>
      </Navbar>
      
      {/* Slider Image */}

      <Carousel className="slider">
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100 image"
          src={food}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>50 SPANISH FOOD RECIPES</h3>
          <p>Order Now</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100 image"
          src={milk}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>38 CHICKEN DINNER ITEMS</h3>
          <p>Order Now</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 image"
          src={eat}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>HOLIDAY ENTERTANING ITEMS</h3>
          <p>Order Now</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
   </>
  )
}

export default Header;