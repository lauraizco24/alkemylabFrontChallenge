import React from "react";
import Header from "../commons/Header";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import "../../App.css";



const HomeAdmin = () => {
    return (
        <div className="home-container">
            <div className="header-content">
                <Header />

            </div>

            <div className="main-section-content">


                <h1>Hello, Administrador!</h1>
                <p>
                    Bienvenido al sistema de universidad ALKEMYLAB
                        </p>
                <Container>
                    <Row className="admin-buttons">
                        <div>
                            <Button variant="primary" href="./admin">Crear Administrador</Button>
                        </div>
                        <div>

                            <Button variant="primary" href="./admins">Ver Todos Administradores</Button>
                        </div>
                        <div>
                            <Button variant="primary" href="./students" >Ver Todos Los Estudiantes</Button>
                        </div>
                        <div>
                            <Button variant="primary" href="./subjects">Ver todas Materias</Button>
                        </div>
                        <div>
                            <Button variant="primary" href="./subject">Crear Materia</Button>
                        </div>
                        <div>
                            <Button variant="primary" href="./subject/{id}">Modificar Materia</Button>
                        </div>
                        <div>
                            <Button variant="primary" href="./subject/{id}/delete">Modificar Materia</Button>
                        </div>
                        <div>
                            <Button variant="primary" href="./auth/teachers">Crear nuevo Profesor</Button>
                        </div>
                        <div>
                            <Button variant="primary" href="./teachers/{id}">Modificar Profesor</Button>
                        </div>
                        <div>
                            <Button variant="primary" href="./subject/{id}/teacher">Asignar Profesor a Materia</Button>
                        </div>
                    </Row>
                </Container>


            </div>
        </div>
    );
};

export default HomeAdmin;