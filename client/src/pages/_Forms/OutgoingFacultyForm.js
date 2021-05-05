import React, { Component } from 'react';
import { Row, Col, Card, CardBody, FormGroup, Button, Label ,Container,Input} from "reactstrap";

import { AvForm, AvField} from "availity-reactstrap-validation";
import axios from '../../axios';


//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';

class OutgoingFacultyForm extends Component {
    constructor(props) {
        super(props);
        this.state={
            breadcrumbItems : [
                { title : "Faculty", link : "#" },
                { title : "Outgoing Faculty Form", link : "#" },
            ],

            Name: 'Jack Dawson',
            Designation: 'Professor',
            Funded_by: 'Univeristy',
            Coordinating_department_or_office: 'Department of Computer Science',
            From_date: 24/7/2000,
            To_date: 24/7/2000,
            


        }
        
        
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleDesignationChange = this.handleDesignationChange.bind(this);
        this.handleFunded_byChange = this.handleFunded_byChange.bind(this);
        this.handleCDeptChange = this.handleCDeptChange.bind(this);
        this.handleFrDateChange = this.handleFrDateChange.bind(this);
        this.handleToDateChange = this.handleToDateChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

     
    }
     

    handleNameChange(event) {
        this.setState({Name: event.target.value});
      }
    handleDesignationChange(event){
        this.setState({Designation: event.target.value});
      }
    handleFunded_byChange(event){
        this.setState({Funded_by: event.target.value});
    }
    handleCDeptChange(event){
        this.setState({Coordinating_department_or_office: event.target.value});
    }
    handleFrDateChange(event){
        this.setState({From_date: event.target.value});
    }
    handleToDateChange(event){
        this.setState({To_date: event.target.value});
    }
    
    handleSubmit(event) {
        event.preventDefault();
        const faculty ={
            Name:this.state.Name,
            Designation:this.state.Designation,
            To_date:this.state.From_date,
            Funded_by:this.state.Funded_by,
            Coordinating_department_or_office:this.state.Coordinating_department_or_office,
            From_date:this.state.From_date
        }
        axios
          .post("http://localhost:8001/faculty/outgoing-faculty", faculty)

          alert("Data Submitted");
      }

   
      

   

 
    
    render() {
        return (
            <React.Fragment>
                <div className="page-content">
                    <Container fluid>

                    <Breadcrumbs title="Outgoing Faculty Form" breadcrumbItems={this.state.breadcrumbItems} />

                    
                    <Row>
                            <Col xl="12">
                                <Card>
                                    <CardBody>
                                        <h4 className="card-title">Outgoing Faculty Form</h4>

                                       <Row>
                                            <Col xs={12}>
                                                <Card onSubmit ={this.handleSubmit}>
                                                    <CardBody >
                                                        <AvForm className="needs-validation" >
                                                            <Row>
                                                                <Col md="6">
                                                                        <FormGroup row>
                                                                            <Label Col md={4} htmlFor="validationCustom01" className="col-md-2 col-form-label">Name of the Faculty</Label>
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
                                                                <Col md="6">
                                                                    <FormGroup row>
                                                                        <Label Col md={4} htmlFor="validationCustom01" className="col-md-2 col-form-label">Designation</Label>
                                                                        <Col md={5}>
                                                                        <AvField
                                                                            name="Designation"
                                                                            placeholder="Eg: Enter the designation"
                                                                            type="text"
                                                                            errorMessage="Enter the designation"
                                                                            className="form-control"
                                                                            validate={{ required: { value: true } }}
                                                                            id="validationCustom02"
                                                                            onChange={this.handleDesignationChange}
                                                                            />
                                                                        </Col>
                                                                    </FormGroup>
                                                                </Col>
                                                            </Row>
                                                            
                                                                    <Row>
                                                                            <Col lg="6">
                                                                                    <FormGroup row>
                                                                                        <Label Col md={4} for="basicpill-firstname-input14" className="col-md-2 col-form-label">Funded by</Label>
                                                                                        <Col md={5}>
                                                                                        <AvField
                                                                                        name="Funded by"
                                                                                        placeholder="Eg: University of Cali"
                                                                                        type="text"
                                                                                        errorMessage="Enter who funded the faculty"
                                                                                        className="form-control"
                                                                                        validate={{ required: { value: true } }}
                                                                                        id="validationCustom03"
                                                                                        onChange={this.handleFunded_byChange}
                                                                                        />
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
                                                                        <Row>
                                                                        <Col lg = "6">
                                                                        <FormGroup row>
                                                                                
                                                                                    
                                                                                        <Label Col md={4} for="basicpill-firstname-input14" className="col-md-2 col-form-label">From Date</Label>
                                                                                        <Col md={5}>
                                                                                         <Input className="form-control" type="date" defaultValue="2020-03-14" id="example-date-input"  onChange={this.handleFrDateChange} />

                                                                                        </Col>
                                                                                    
                                                                            </FormGroup>
                                                                            </Col>
                                                                        </Row>
                                                                        <Row>
                                                                            <Col lg = "6">
                                                                            <FormGroup row>
                                                                                
                                                                                    <Label Col md={4} for="basicpill-firstname-input14" className="col-md-2 col-form-label">To Date</Label>
                                                                                    <Col md={5}>
                                                                                        <Input className="form-control" type="date" defaultValue="2020-03-14" id="example-date-input"   onChange={this.handleToDateChange} />
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

export default OutgoingFacultyForm;