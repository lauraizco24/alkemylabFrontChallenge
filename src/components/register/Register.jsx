import React, { Component, useState } from 'react';
import { Dialog } from 'primereact/dialog';

import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { Menubar } from "primereact/menubar";

import 'primeflex/primeflex.css';

import { AuthenticationService } from "../../service/AuthenticationService";
import "./Register.css";
import { AlertService } from "../../service/AlertService";
import Logo from '../../assets/img/alkemy.jpg';
import Image from 'react-bootstrap/Image';



export default class Register extends Component {

    constructor() {
        super();
        this.state = {
            visible: false,
            usuario: {
                userType: null,
                name: null,
                lastName: null,
                password: null,
            },
        };


        this.registrar = this.registrar.bind(this);
        this.items = [
            {
                label: 'Registrarse',
                command: () => { this.showRegistrationDialog() }
            },
        ]


    }

    registrar() {
        //console.log('info usuario')
        //console.log(this.state.usuario)
        AuthenticationService.register(this.state.usuario).then((data) => {
            AlertService.success('Registrade con exito!');
            this.setState({
                visible: false,
                usuario: {
                    userType: null,
                    name: null,
                    lastName: null,

                    password: null,
                },
            });
        });
    }

    render() {


        return (
            <div className="register-div-button">

                <Menubar model={this.items} />
                <Dialog visible={this.state.visible} footer={this.footer} style={{ width: "20%", height: "60%" }} modal={true} onHide={() => this.setState({ visible: false })}>
                    <div className="col-12">
                        <div className="logo-modales">
                            <Image src={Logo} roundedCircle />
                        </div>
                        <h2>Registro</h2>
                        <div className="registro-container">
                            <form id="registro" className="registro-dialog">
                                <div className="form-group">
                                    <label htmlFor="nombre">Nombre:</label>
                                    <input
                                        value={this.state.usuario.name}
                                        id="name"
                                        onChange={(e) => {
                                            let val = e.target.value;
                                            this.setState((prevState) => {
                                                let usuario = Object.assign({}, prevState.usuario);
                                                usuario.name = val;
                                                return { usuario };
                                            });
                                        }}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="nombre">Apellido:</label>
                                    <input
                                        value={this.state.usuario.lastName}
                                        id="lastName"
                                        onChange={(e) => {
                                            let val = e.target.value;
                                            this.setState((prevState) => {
                                                let usuario = Object.assign({}, prevState.usuario);
                                                usuario.lastName = val;
                                                return { usuario };
                                            });
                                        }}
                                    />
                                </div>


                                <div className="form-group">

                                    <label className="Registro-label">Tipo Usuario:</label>
                                    <div className="register-user-type">
                                        <input className="register-doc-type"
                                            type="radio"
                                            inputId="rb2"
                                            name="Student"
                                            value="STUDENT"
                                            onChange={(e) => {
                                                let val = e.target.value;
                                                this.setState((prevState) => {
                                                    let usuario = Object.assign({}, prevState.usuario);
                                                    usuario.userType = val;
                                                    return { usuario };
                                                });
                                            }}
                                        />
                                        <label htmlFor="rb1" className="p-radiobutton-label">
                                            Estudiante
                                    </label>

                                        <input className="register-doc-type"
                                            type="radio"
                                            inputId="rb2"
                                            name="Admin"
                                            value="ADMIN"
                                            onChange={(e) => {
                                                let val = e.target.value;
                                                this.setState((prevState) => {
                                                    let usuario = Object.assign({}, prevState.usuario);
                                                    usuario.userType = val;
                                                    return { usuario };
                                                });
                                            }}
                                        />
                                        <label htmlFor="rb1" className="p-radiobutton-label">
                                            Administrador
                                    </label>
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="identification">DNI</label>
                                    <input
                                        value={this.state.usuario.dni}
                                        id="dni"
                                        onChange={(e) => {
                                            let val = e.target.value;
                                            this.setState((prevState) => {
                                                let usuario = Object.assign({}, prevState.usuario);
                                                usuario.dni = val;
                                                return { usuario };
                                            });
                                        }}
                                    />
                                </div>

                            </form>

                            <div className="form-group">
                                <button className="register-button" label="Guardar" onClick={this.registrar}>
                                    Registrate!
                            </button>
                            </div>
                        </div>
                    </div>
                </Dialog>
                {/* <Growl ref={(el) => this.growl = el} /> */}
            </div >
        );
    }

    showRegistrationDialog() {
        this.setState({
            visible: true
        });

    }



}