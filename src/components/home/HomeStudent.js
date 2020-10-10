import React, { Component, useState } from "react";

import "../../App.css";
import SubjectService from "../../service/SubjectService";
import Card from 'react-bootstrap/Card';



export default class HomeStudents extends Component {
    constructor() {
      super();
      this.state = {
        visible: false,
        subjects: [],
      };
      this.subjectService = new SubjectService();
    }
  
    componentDidMount() {
      this.subjectService
        .getSubjects()
        .then((data) => this.setState({ subjects: data }));
    }
  
    render() {
      return (
        <div className="container-students">
          <div className="container-students">
            <div className="container">
              {this.state.subjects.map((subject) => {
                return (
                  <Card>
                    nombreDelProducto={subject.nombre}
                    cupoMaximo={subject.maxStudents}
                    </Card>
                );
              })}
            </div>
          </div>
        </div>
      );
    }
}