import React, { Component } from 'react';
import { Row, Col, Card, CardBody, FormGroup, Button, Label,Container,Input } from "reactstrap";

import { AvForm, AvField} from "availity-reactstrap-validation";

import axios from '../../axios';

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';

class WebinarsForm extends Component {
    constructor(props) {
        super(props);
        this.state={
            breadcrumbItems : [
                { title : "Webinars", link : "#" },
                { title : "Webinars Form", link : "#" },
            ],

            Webinar: 'Webinar Name',
            Speaker: 'Prof. Jack Dawson',
            Organised_on: '27/03/2021',
            Organised_by: 'Department of Computer Science',

            
        }
        
        this.handleWebinarChange = this.handleWebinarChange.bind(this);
        this.handleSpeakerChange = this.handleSpeakerChange.bind(this);
        this.handleOrganised_onChange = this.handleOrganised_onChange.bind(this);
        this.handleOrganised_byChange = this.handleOrganised_byChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

       
    }
     

    handleWebinarChange(event) {
        this.setState({Webinar: event.target.value});
      }
    handleSpeakerChange(event) {
        this.setState({Speaker: event.target.value});
      }
    handleOrganised_onChange(event) {
        this.setState({Organised_on: event.target.value});
      }
    handleOrganised_byChange(event) {
        this.setState({Organised_by: event.target.value});
      }
    
    handleSubmit(event) {
        event.preventDefault();
        const webinar = {
            Webinar:this.state.Webinar,
            Speaker:this.state.Speaker,
            // Organised_on:this.state.Organised_on,
            Organised_by:this.state.Organised_by
            
        }
        axios
          .post("http://localhost:8001/webinars/", webinar)

          alert("Data Submitted");
      }

   

      

    render() {
        return (
            <React.Fragment>
                <div className="page-content">
                    <Container fluid>

                    <Breadcrumbs title="Webinars Form" breadcrumbItems={this.state.breadcrumbItems} />

                    <Row>
                            <Col xl="12">
                                <Card>
                                    <CardBody>
                                        <h4 className="card-title">Webinars Form</h4>

                                       <Row>
                                            <Col xs={12}>
                                                <Card onSubmit ={this.handleSubmit}>
                                                    <CardBody >
                                                        <AvForm className="needs-validation" >
                                                            <Row>
                                                                <Col md="6">
                                                                        <FormGroup row>
                                                                            <Label Col md={4} htmlFor="validationCustom01" className="col-md-2 col-form-label">Webinar Name</Label>
                                                                            <Col md={5}>
                                                                            <AvField
                                                                            name="Webinar Name"
                                                                            placeholder="Eg: Webinar"
                                                                            type="text"
                                                                            errorMessage="Enter the Webinar Name"
                                                                            className="form-control"
                                                                            validate={{ required: { value: true } }}
                                                                            id="validationCustom01"
                                                                            onChange={this.handleWebinarChange}
                                                                            />
                                                                            </Col>
                                                                        </FormGroup>
                                                                </Col>
                                                            </Row>
                                                            <Row>
                                                                <Col md="6">
                                                                    <FormGroup row>
                                                                        <Label Col md={4} htmlFor="validationCustom01" className="col-md-2 col-form-label">Speaker Name</Label>
                                                                        <Col md={5}>
                                                                        <AvField
                                                                        name="Speaker"
                                                                        placeholder="Eg: Jack Dawson"
                                                                        type="text"
                                                                        errorMessage="Enter the Speaker's name"
                                                                        className="form-control"
                                                                        validate={{ required: { value: true } }}
                                                                        id="validationCustom01"
                                                                        onChange={this.handleSpeakerChange}
                                                                        />
                                                                        </Col>
                                                                    </FormGroup>
                                                                </Col>
                                                            </Row>
                                                            
                                                                    <Row>
                                                                            <Col lg="6">
                                                                                    <FormGroup row>
                                                                                        <Label Col md={4} for="basicpill-firstname-input14" className="col-md-2 col-form-label">Date of Webinar</Label>
                                                                                        <Col md={5}>
                                                                                    <Input className="form-control" type="date" defaultValue="2020-03-14" id="example-date-input" onChange={this.handleOrganised_onChange} />
                                                                                    </Col>
                                                                                    </FormGroup>
                                                                                </Col>
                                                                        </Row>
                                                                    <Row>
                                                                            <Col lg="6">
                                                                                    <FormGroup row>
                                                                                        <Label Col md={4} for="basicpill-firstname-input14" className="col-md-2 col-form-label">Organised by</Label>
                                                                                        <Col md={5}>
                                                                                        <AvField
                                                                                        name="Organised by"
                                                                                        placeholder="Eg: Department Of Computer Science"
                                                                                        type="text"
                                                                                        errorMessage="Enter the Organising Department"
                                                                                        className="form-control"
                                                                                        validate={{ required: { value: true } }}
                                                                                        id="validationCustom01"
                                                                                        onChange={this.handleOrganised_byChange}
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

export default WebinarsForm;