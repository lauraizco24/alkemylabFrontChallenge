import React from 'react';
import '../../App.css';
import laura from '../../assets/img/LauraIzquierdo.jpg';
import Navbar from 'react-bootstrap/Navbar';


const Header = () => {
    return (

        <div className ="header-container">

<Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">
      <img
        alt=""
        src={laura}
        width="60vw"
        
        className="d-inline-block align-top"
      />{' '}
      Laura Izquierdo -Java Challenge
    </Navbar.Brand>
  </Navbar>
        </div>
        );
};

export default Header;