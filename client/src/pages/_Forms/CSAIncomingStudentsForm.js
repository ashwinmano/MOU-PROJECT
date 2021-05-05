import React, { Component } from 'react';
import { Row, Col, Card, CardBody, FormGroup, Button, Label ,Container,Input} from "reactstrap";

import { AvForm, AvField } from "availity-reactstrap-validation";
import axios from '../../axios';


//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';

class CSAIncomingStudentsForm extends Component {
    constructor(props) {
        super(props);
        this.state={
            breadcrumbItems : [
                { title : "CSA Incoming Students", link : "#" },
                { title : "CSA Incoming Students Form", link : "#" },
            ],
            

            Name_of_person: 'Jack Dawson',
            From_date: 24/7/2000,
            To_date: 24/7/2000,
            Purpose_of_visit: 'Purpose',

            
        }
        
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleFrDateChange = this.handleFrDateChange.bind(this);
        this.handleToDateChange = this.handleToDateChange.bind(this);
        this.handlePurpose_of_visitChange = this.handlePurpose_of_visitChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        
    }
     
	

    handleNameChange(event) {
        this.setState({Name_of_person: event.target.value});
      }
    handleFrDateChange(event){
        this.setState({From_date: event.target.value});
    }
    handleToDateChange(event){
        this.setState({To_date: event.target.value});
    }
    handlePurpose_of_visitChange(event){
        this.setState({Purpose_of_visit: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        const CSA = {
            Name_of_person:this.state.Name_of_person,
            From_date:this.state.From_date,
            To_date:this.state.To_date,
            Purpose_of_visit:this.state.Purpose_of_visit
        }
        axios
          .post("http://localhost:8001/csa-incoming/incoming-students", CSA)

          alert("Data Submitted");
      }

   


    render() {
        return (
            <React.Fragment>
                <div className="page-content">
                    <Container fluid>

                    <Breadcrumbs title="CSA Incoming Students Form" breadcrumbItems={this.state.breadcrumbItems} />
                    <Row>
                            <Col xl="12">
                                <Card>
                                    <CardBody>
                                        <h4 className="card-title">CSA Incoming Students Form</h4>
                                        <Row>
                                            <Col xs={12}>
                                                <Card onSubmit ={this.handleSubmit}>
                                                    <CardBody >
                                                        <AvForm className="needs-validation" >
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
                                                                        <Row>
                                                                            <Col lg="6">
                                                                                    <FormGroup row>
                                                                                        <Label Col md={4} for="basicpill-firstname-input14" className="col-md-2 col-form-label">Purpose of visit</Label>
                                                                                        <Col md={5}>
                                                                                        <AvField
                                                                                        name="Purpose_of_visit"
                                                                                        placeholder="Enter the purpose of  visit"
                                                                                        type="text"
                                                                                        errorMessage="Enter the purpose of  visit"
                                                                                        className="form-control"
                                                                                        validate={{ required: { value: true } }}
                                                                                        id="validationCustom04"
                                                                                        onChange={this.handlePurpose_of_visitChange}
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

export default CSAIncomingStudentsForm;