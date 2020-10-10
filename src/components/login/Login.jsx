import React, { Component, useState } from 'react';
import { Dialog } from 'primereact/dialog';

import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { Menubar } from "primereact/menubar";

import 'primeflex/primeflex.css';

import { AuthenticationService } from "../../service/AuthenticationService";
import "./Login.css";
import { AlertService } from "../../service/AlertService";
import Logo from '../../assets/img/alkemy.jpg';
import Image from 'react-bootstrap/Image';



export default class Login extends Component {

    constructor() {
        super();
        this.state = {
          visible: false,
          usuario: {
            username: null,
            password: null,
          },
        };
        this.login = this.login.bind(this);
        this.items = [
          {
            label: "Iniciar Sesion",
            command: () => {
              this.showLoginDialog();
            },
          },
        ];
      }
    
      login() {
        AuthenticationService.login(this.state.usuario).then((data) => {
          AlertService.success("Ingresar!");
          this.setState({
            visible: false,
            usuario: {
              username: null,
              password: null,
            },
          });
        });
      }
    

    render() {


        return (
            <div className="register-div-button">

                <Menubar model={this.items} />
                <Dialog visible={this.state.visible} footer={this.footer} style={{ width: "20%", height: "30%" }} modal={true} onHide={() => this.setState({ visible: false })}>
                    <div className="col-12">
                        <div className="logo-modales">
                            <Image src={Logo} roundedCircle />
                        </div>
                        <div className="registro-container">
                            <form id="registro" className="registro-dialog">
                            <div className="form-group">
                <label className="Registro-label">Usuario/DNI:</label>
                <input
                  className="col-12"
                  placeholder="Username"
                  onChange={(e) => {
                    let val = e.target.value;
                    this.setState((prevState) => {
                      let usuario = Object.assign({}, prevState.usuario);
                      usuario.username = val;
                      return { usuario };
                    });
                  }}
                ></input>
              </div>
              <div className="form-group">
                <label className="Registro-label">Contraseña/Legajo:</label>
                <input
                  className="col-12"
                  type="password"
                  placeholder="Password"
                  onChange={(e) => {
                    let val = e.target.value;
                    this.setState((prevState) => {
                      let usuario = Object.assign({}, prevState.usuario);
                      usuario.password = val;
                      return { usuario };
                    });
                  }}
                ></input>
              </div>
                            </form>

                            <div className="form-group">
                            <button className="Boton-registro" onClick={this.login}>
                Ingresar!
              </button>
                            </div>
                        </div>
                    </div>
                </Dialog>
                {/* <Growl ref={(el) => this.growl = el} /> */}
            </div >
        );
    }

    showLoginDialog() {
        this.setState({
          visible: true,
        });
      }

}