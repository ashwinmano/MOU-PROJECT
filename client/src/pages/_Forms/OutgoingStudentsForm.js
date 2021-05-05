import React, { Component } from 'react';
import { Row, Col, Card, CardBody, FormGroup, Button, Label ,Container,Input } from "reactstrap";

import { AvForm, AvField} from "availity-reactstrap-validation";
import axios from '../../axios';


//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';

class OutgoingStudentsForm extends Component {
    constructor(props) {
        super(props);
        this.state={
            breadcrumbItems : [
                { title : "Students", link : "#" },
                { title : "Outgoing Students Form", link : "#" },
            ],

            Registration_no: '0123456',
            Name_of_the_student: 'Jack Dawson',
            Email_id: 'jackdawson@gmail.com',
            Transfer_Semester: 4,
            Christ_Programme: 'BSc cme',
            From_date: 24/7/2000,
            To_date: 24/7/2000,
            Coordinating_department_or_office: 'Department of Computer Science',

        }
        
        this.handleRegNumChange = this.handleRegNumChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleTrSemChange = this.handleTrSemChange.bind(this);
        this.handleCPrgChange = this.handleCPrgChange.bind(this);
        this.handleFrDateChange = this.handleFrDateChange.bind(this);
        this.handleToDateChange = this.handleToDateChange.bind(this);
        this.handleCDeptChange = this.handleCDeptChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

      
    }
    handleRegNumChange(event) {
        this.setState({Registration_no: event.target.value});
      }
    handleNameChange(event) {
        this.setState({studentName: event.target.value});
      }
    handleEmailChange(event){
        this.setState({Email_id: event.target.value});
      }
    handleTrSemChange(event){
        this.setState({Transfer_Semester: event.target.value});
    }
    handleCPrgChange(event){
        this.setState({Christ_Programme: event.target.value});
    }
    handleFrDateChange(event){
        this.setState({From_date: event.target.value});
    }
    handleToDateChange(event){
        this.setState({To_date: event.target.value});
    }
    handleCDeptChange(event){
        this.setState({Coordinating_department_or_office: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        const students ={
            Registration_no:this.state.Registration_no,
            Name_of_the_student:this.state.Name_of_the_student,
            Email_id:this.state.Email_id,
            Transfer_Semester:this.state.Transfer_Semester,
            Christ_Programme:this.state.Christ_Programme,
            From_date:this.state.From_date,
            To_date:this.state.To_date,
            Coordinating_department_or_office:this.state.Coordinating_department_or_office,
        };

        axios
          .post("http://localhost:8001/students/outgoing-students", students)
          alert("Data Submitted");
      }


      

   

  
    render() {
        return (
            <React.Fragment>
                <div className="page-content">
                    <Container fluid>

                    <Breadcrumbs title="Outgoing Students Form" breadcrumbItems={this.state.breadcrumbItems} />

                    <Row>
                            <Col xl="12">
                                <Card>
                                    <CardBody>
                                        <h4 className="card-title">Outgoing Students Form</h4>

                                       <Row>
                                            <Col xs={12}>
                                                <Card onSubmit ={this.handleSubmit}>
                                                    <CardBody >
                                                        <AvForm className="needs-validation" >
                                                            <Row>
                                                                <Col md="6">
                                                                        <FormGroup row>
                                                                            <Label Col md={4} htmlFor="validationCustom01" className="col-md-2 col-form-label">Register Number</Label>
                                                                            <Col md={5}>
                                                                            <AvField
                                                                            name="Register Num"
                                                                            placeholder="Eg: 0123456"
                                                                            type="text"
                                                                            errorMessage="Enter the Register Number"
                                                                            className="form-control"
                                                                            validate={{ required: { value: true } }}
                                                                            id="validationCustom01"
                                                                            onChange={this.handleRegNumChange}
                                                                            />
                                                                            </Col>
                                                                        </FormGroup>
                                                                </Col>
                                                            </Row>
                                                            <Row>
                                                                <Col md="6">
                                                                    <FormGroup row>
                                                                        <Label Col md={4} htmlFor="validationCustom01" className="col-md-2 col-form-label">Name of the Student</Label>
                                                                        <Col md={5}>
                                                                        <AvField
                                                                        name="name"
                                                                        placeholder="Eg: Jack Dawson"
                                                                        type="text"
                                                                        errorMessage="Enter the Name"
                                                                        className="form-control"
                                                                        validate={{ required: { value: true } }}
                                                                        id="validationCustom01"
                                                                        onChange={this.handleNameChange}
                                                                        />
                                                                        </Col>
                                                                    </FormGroup>
                                                                </Col>
                                                            </Row>
                                                            
                                                                    <Row>
                                                                            <Col lg="6">
                                                                                    <FormGroup row>
                                                                                        <Label Col md={4} for="basicpill-firstname-input14" className="col-md-2 col-form-label">Transfer Semester</Label>
                                                                                        <Col md={5}>
                                                                                        <AvField
                                                                                            name="Transfer Semester"
                                                                                            placeholder="Eg: 4 Sem"
                                                                                            type="text"
                                                                                            errorMessage="Enter the Transfer Semester"
                                                                                            className="form-control"
                                                                                            validate={{ required: { value: true } }}
                                                                                            id="validationCustom02"
                                                                                            onChange={this.handleTrSemChange}
                                                                                            />
                                                                                            </Col>
                                                                                    </FormGroup>
                                                                                </Col>
                                                                        </Row>
                                                                    <Row>
                                                                            <Col lg="6">
                                                                                    <FormGroup row>
                                                                                        <Label Col md={4} for="basicpill-firstname-input14" className="col-md-2 col-form-label">Christ Programme</Label>
                                                                                        <Col md={5}>
                                                                                        <AvField
                                                                                            name="Christ Programme"
                                                                                            placeholder="Eg: BSc CME"
                                                                                            type="text"
                                                                                            errorMessage="Enter the Christ Programme"
                                                                                            className="form-control"
                                                                                            validate={{ required: { value: true } }}
                                                                                            id="validationCustom03"
                                                                                            onChange={this.handleCPrgChange}
                                                                                            />
                                                                                        </Col>
                                                                                    </FormGroup>
                                                                                </Col>
                                                                        </Row>
                                                                        <Row>
                                                                        <Col lg = "6">
                                                                        <FormGroup row>
                                                                                        <Label Col md={4} for="basicpill-firstname-input14" className="col-md-2 col-form-label">From Date</Label>
                                                                                        <Col md={5}>
                                                                                    
                                                                                            <Input className="form-control" type="date" defaultValue="2020-03-14" id="example-date-input" onChange={this.handleFrDateChange} />
                                                                                        </Col>
                                                                                    
                                                                            </FormGroup>
                                                                            </Col>
                                                                        </Row>
                                                                        <Row>
                                                                            <Col lg = "6">
                                                                            <FormGroup row>
                                                                                
                                                                                    <Label Col md={4} for="basicpill-firstname-input14" className="col-md-2 col-form-label">To Date</Label>
                                                                                    <Col md={5}>
                                                                                    <Input className="form-control" type="date" defaultValue="2020-03-14" id="example-date-input" onChange={this.handleToDateChange} />

                                                                                        </Col>
                                                                                    
                                                                            </FormGroup>
                                                                            </Col>
                                                                        </Row>
                                                                        <Row>
                                                                            <Col lg="6">
                                                                                    <FormGroup row>
                                                                                        <Label Col md={4} for="basicpill-firstname-input14" className="col-md-2 col-form-label">Coordinating Department/Office</Label>
                                                                                        <Col md={5}>
                                                                                        <AvField
                                                                                            name="Coordination Department/Office"
                                                                                            placeholder="Eg: Department of Computer Science"
                                                                                            type="text"
                                                                                            errorMessage="Enter the Coordinating Department/Office"
                                                                                            className="form-control"
                                                                                            validate={{ required: { value: true } }}
                                                                                            id="validationCustom04"
                                                                                            onChange={this.handleCDeptChange}
                                                                                            />
                                                                                            </Col>
                                                                                    </FormGroup>
                                                                                </Col>
                                                        </Row>
                                            <Button color="primary" type="submit" onClick={this.handleSubmit}>Submit form</Button>
                                        </AvForm>
                                        </CardBody>
                                </Card>
                            </Col>
                            </Row> 
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

export default OutgoingStudentsForm;