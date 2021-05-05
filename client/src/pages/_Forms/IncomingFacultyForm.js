import React, { Component } from 'react';
import { Row, Col, Card, CardBody, FormGroup, Button, Label ,Container,Input } from "reactstrap";

import { AvForm, AvField} from "availity-reactstrap-validation";

import axios from '../../axios';

// Date Time Picker




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
            From_date: '24/7/2000',
            To_date: '24/7/2000',
        }
        
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleDesignationChange = this.handleDesignationChange.bind(this);
        this.handleoutdateChange = this.handleoutdateChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleindateChange = this.handleindateChange.bind(this);
    }
     //DatePicker
    handleNameChange(event) {
        this.setState({Name: event.target.value});
      }
    handleDesignationChange(event){
        this.setState({Designation: event.target.value});
      }
    
      handleoutdateChange(e){  
          this.setState({
            From_date:e.target.value
          });
      }
      handleindateChange(e){  
        this.setState({
          To_date:e.target.value
        });
    }
      handleSubmit(event) {
          event.preventDefault();
       const faculty = {
           Name:this.state.Name,
           Designation:this.state.Designation,
        //    From_date:this.state.From_date,
        //    To_date:this.state.To_date
       }
       axios
          .post("http://localhost:8001/faculty/incoming-faculty", faculty)
        
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
                                                                <Col lg = "6">
                                                                        <FormGroup row>
                                                                                
                                                                                    
                                                                                        <Label Col md={4} for="basicpill-firstname-input14" className="col-md-2 col-form-label">From Date</Label>
                                                                                        <Col md={5}>
                                                                                        <Input className="form-control" type="date" defaultValue="2020-03-14" id="example-date-input" onChange={this.handleoutdateChange} />
                                                                                        </Col>
                                                                                    
                                                                            </FormGroup>
                                                                            </Col>
                                                                        </Row>
                                                                        <Row>
                                                                            <Col lg = "6">
                                                                            <FormGroup row>
                                                                                
                                                                                    <Label Col md={4} for="basicpill-firstname-input14" className="col-md-2 col-form-label">To Date</Label>
                                                                                    <Col md={5}>
                                                                                    <Input className="form-control" type="date" defaultValue="2020-03-14" id="example-date-input" onChange={this.handleindateChange} />
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