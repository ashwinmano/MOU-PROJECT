import React, { Component } from 'react';
import { Row, Col, Card, CardBody, FormGroup, Label, Input ,Container} from "reactstrap";

import axios from '../../axios';
// Date Time Picker
import "react-datepicker/dist/react-datepicker.css";


// Form Editor
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';

class IncomingStudentsForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
          breadcrumbItems: [
            { title: "Students", link: "#" },
            { title: "Incoming Students", link: "#" },
          ],
          student: "Ash",
          users: [],
          isLoading: false,
          isError: false,
          Name_of_the_student: "Common",
          From_date: "24/7/2000",
          To_date: "24/7/2000",
          Course_or_Activity_undertaken: "history",
          Coordinating_departmen_or_office: "None",
        };
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleindateChange = this.handleindateChange.bind(this);
        this.handleoutdateChange = this.handleoutdateChange.bind(this);
        this.handleCourse = this.handleCourse.bind(this);
        this.handleCoordinate = this.handleCoordinate.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      handleNameChange(event) {
        this.setState({ Name_of_the_student: event.target.value });
      }
      handleoutdateChange(event) {
        this.setState({ To_date: event.target.value });
      }
    
      handleindateChange(event) {
        this.setState({ From_date: event.target.value });
      }
      handleCourse(event) {
        this.setState({ Course_or_Activity_undertaken: event.target.value });
      }
      handleCoordinate(event) {
        this.setState({ Coordinating_departmen_or_office: event.target.value });
      }
      handleSubmit(event) {
        event.preventDefault();
        const registered = {
          Name_of_the_student: this.state.Name_of_the_student,
          From_date: this.state.indate,
          To_date: this.state.outdate,
          Course_or_Activity_undertaken: this.state.Course_or_Activity_undertaken,
          Coordinating_departmen_or_office: this.state
            .Coordinating_departmen_or_office,
        };
    
        axios
          .post("http://localhost:8001/students/incoming-students", registered)
    
        alert("Data Submitted");
      }
    

    render() {
        return (
            <React.Fragment>
                <div className="page-content">
                    <Container fluid>

                    <Breadcrumbs title="Incoming Students Form" breadcrumbItems={this.state.breadcrumbItems} />

                     <Row>
                            <Col xs={12}>
                                <Card>
                                    <CardBody >
                                        <h4 className="card-title">Incoming Students Form</h4>

                                        <FormGroup row>
                                            <Label Col md={4} htmlFor="example-text-input" className="col-md-2 col-form-label">Name of the student</Label>
                                            <Col md={8}>
                                                <Input className="form-control" type="text" id="example-text-input" onChange={this.handleNameChange}/>
                                            </Col>
                                        </FormGroup>
                                        <FormGroup row>
                                            <Label Col md={4} htmlFor="example-datetime-local-input" className="col-md-2 col-form-label">From date</Label>
                                            <Col md={8}>
                                                <Input className="form-control" type="date" defaultValue="2020-03-14" id="example-date-input" onChange={this.handleoutdateChange} />
                                            </Col>
                                        </FormGroup>
                                        <FormGroup row>
                                            <Label  Col md={4} htmlFor="example-date-input" className="col-md-2 col-form-label">To date:</Label>
                                            <Col md={8}>
                                                <Input className="form-control" type="date" defaultValue="2020-03-19" id="example-date-output" onChange={this.handleindateChange} />
                                            </Col>
                                        </FormGroup>
                                        <FormGroup row>
                                            <Label Col md={4} htmlFor="example-text-input" className="col-md-2 col-form-label">Course/Activity Undertaken</Label>
                                            <Col md={8}>
                                                <Input className="form-control" type="text" defaultValue="CSA" id="example-text-input" onChange={this.handleCourse}/>
                                            </Col>
                                        </FormGroup>
                                        <FormGroup row>
                                            <Label Col md={4} htmlFor="example-text-input" className="col-md-2 col-form-label">Coordinating Department/Office</Label>
                                            <Col md={8}>
                                                <Input className="form-control" type="text" defaultValue="Artisanal kale" id="example-text-input" onChange={this.handleCoordinate} />
                                            </Col>
                                        </FormGroup>
                                        <button type="button" class="btn btn-primary" onClick={this.handleSubmit}>Add New</button>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row> 
                    
                    </Container> 
                </div>
            </React.Fragment>
        );
    }
}

export default IncomingStudentsForm;