import React from "react";
import Header from "../commons/Header";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';

import "../../App.css";
import Register from "../register/Register";
import Login from '../login/Login';


const Home = () => {
  return (
    <div className="home-container">
      <div className="header-content">
        <Header/>
    
      </div>

      <div className="main-section-content">

      <Jumbotron>
  <h1>Hello, ALKEMY!</h1>
  <p>
    Bienvenido al sistema de universidad ALKEMYLAB
  </p>
  <p>
  <Button variant="primary"><Login></Login></Button>
  </p>
  <p>
  <Button variant="primary"><Register></Register></Button>
  </p>
</Jumbotron>

      </div>
    </div>
  );
};

export default Home;
