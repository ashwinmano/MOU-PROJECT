import React, { Component } from 'react';
import { Row, Col, Card, CardBody, FormGroup, Button, Label,Container} from "reactstrap";

import { AvForm, AvField } from "availity-reactstrap-validation";

import axios from '../../axios';


//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';

class ContactDetailsForm extends Component {
    constructor(props) {
        super(props);
        this.state={
            breadcrumbItems : [
                { title : "Contact Details", link : "#" },
                { title : "Contact Details Form", link : "#" },
            ],

            Name: "Jack Doe",
            EmailID: "jack.doe@christuniversity.in",
            PhoneNum: 987654321,
            Designation: "Professor",
            Department: "Department of Computer Science",


            

        }
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailIDChange = this.handleEmailIDChange.bind(this);
        this.handlePhoneNumChange = this.handlePhoneNumChange.bind(this);
        this.handleDesignationChange = this.handleDesignationChange.bind(this);
        this.handleDepartmentChange = this.handleDepartmentChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleNameChange(event) {
        this.setState({Name: event.target.value});
      }
    handleEmailIDChange(event) {
        this.setState({EmailID: event.target.value});
      }
      handlePhoneNumChange(event) {
        this.setState({PhoneNum: event.target.value});
      }
    handleDesignationChange(event) {
        this.setState({Designation: event.target.value});
      }
      handleDepartmentChange(event) {
        this.setState({Department: event.target.value});
      }
    
    handleSubmit(event) { 
        event.preventDefault();
        const contact  ={
            Name:this.state.Name,
            EmailID:this.state.EmailID,
            PhoneNum:this.state.PhoneNum,
            Designation:this.state.Designation,
            Department:this.state.Department
        }
        axios
          .post("http://localhost:8001/contactus/", contact)

          alert("Data Submitted");
      }

    

        

    render() {
        return (
            <React.Fragment>
                <div className="page-content">
                    <Container fluid>

                    <Breadcrumbs title="Collaborative Conferences Form" breadcrumbItems={this.state.breadcrumbItems} />

                    <Row>
                                            <Col xs={12}>
                                                <Card onSubmit ={this.handleSubmit}>
                                                    <CardBody >
                                                    <h4 className="card-title">Collaborative Publications Form</h4>
                                                        <AvForm className="needs-validation" >
                                                            <Row>
                                                                <Col md="6">
                                                                        <FormGroup row>
                                                                            <Label Col md={4} htmlFor="validationCustom01" className="col-md-2 col-form-label">Name</Label>
                                                                            <Col md={5}>
                                                                            <AvField
                                                                            name="Name"
                                                                            placeholder="Eg: Jack Doe"
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
                                                                <Col md="6">
                                                                    <FormGroup row>
                                                                        <Label Col md={4} htmlFor="validationCustom01" className="col-md-2 col-form-label">Email ID</Label>
                                                                        <Col md={5}>
                                                                        <AvField
                                                                        name="EmailID"
                                                                        placeholder="Eg: jac.doe@christuniversity.in"
                                                                        type="text"
                                                                        errorMessage="Enter the Email ID"
                                                                        className="form-control"
                                                                        validate={{ required: { value: true } }}
                                                                        id="validationCustom01"
                                                                        onChange={this.handleEmailIDChange}
                                                                        />
                                                                        </Col>
                                                                    </FormGroup>
                                                                </Col>
                                                            </Row>
                                                            <Row>
                                                                <Col md="6">
                                                                    <FormGroup row>
                                                                        <Label Col md={4} htmlFor="validationCustom01" className="col-md-2 col-form-label">Phone Number</Label>
                                                                        <Col md={5}>
                                                                        <AvField
                                                                        name="PhoneNum"
                                                                        placeholder="Eg: 9876543210"
                                                                        type="number"
                                                                        errorMessage="Enter the Phone Number"
                                                                        className="form-control"
                                                                        validate={{ required: { value: true } }}
                                                                        id="validationCustom01"
                                                                        onChange={this.handlePhoneNumChange}
                                                                        />
                                                                        </Col>
                                                                    </FormGroup>
                                                                </Col>
                                                            </Row>
                                                            <Row>
                                                                <Col md="6">
                                                                    <FormGroup row>
                                                                        <Label Col md={4} htmlFor="validationCustom01" className="col-md-2 col-form-label">Designation</Label>
                                                                        <Col md={5}>
                                                                        <AvField
                                                                        name="Designation"
                                                                        placeholder="Eg: Professor"
                                                                        type="text"
                                                                        errorMessage="Enter the Designation"
                                                                        className="form-control"
                                                                        validate={{ required: { value: true } }}
                                                                        id="validationCustom01"
                                                                        onChange={this.handleDesignationChange}
                                                                        />
                                                                        </Col>
                                                                    </FormGroup>
                                                                </Col>
                                                            </Row>
                                                            <Row>
                                                                <Col md="6">
                                                                    <FormGroup row>
                                                                        <Label Col md={4} htmlFor="validationCustom01" className="col-md-2 col-form-label">Department</Label>
                                                                        <Col md={5}>
                                                                        <AvField
                                                                        name="Department"
                                                                        placeholder="Eg: Department of Computer Science"
                                                                        type="text"
                                                                        errorMessage="Enter the Department"
                                                                        className="form-control"
                                                                        validate={{ required: { value: true } }}
                                                                        id="validationCustom01"
                                                                        onChange={this.handleDepartmentChange}
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
                    
                    </Container> 
                </div>
            </React.Fragment>
        );
    }
}

export default ContactDetailsForm;