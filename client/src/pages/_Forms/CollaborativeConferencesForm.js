import React, { Component } from 'react';
import { Row, Col, Card, CardBody, FormGroup, Button, Label,Container} from "reactstrap";

import { AvForm, AvField } from "availity-reactstrap-validation";

import axios from '../../axios';


//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';

class CollaborativeConferencesForm extends Component {
    constructor(props) {
        super(props);
        this.state={
            breadcrumbItems : [
                { title : "Collaborative Conferences", link : "#" },
                { title : "Collaborative Conferences Form", link : "#" },
            ],

            Conference_theme: "Tech Fest",
            Organised_by: "Department of Computer Science",


            

        }
        this.handleConference_themeChange = this.handleConference_themeChange.bind(this);
        this.handleOrganised_byChange = this.handleOrganised_byChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleConference_themeChange(event) {
        this.setState({Conference_theme: event.target.value});
      }
    handleOrganised_byChange(event) {
        this.setState({Organised_by: event.target.value});
      }
    
    handleSubmit(event) {
        event.preventDefault();
        const conference ={
            Conference_theme:this.state.Conference_theme,
            Organised_by:this.state.Organised_by
        }
        axios
          .post("http://localhost:8001/collaborations/conferences", conference)

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
                                                                            <Label Col md={4} htmlFor="validationCustom01" className="col-md-2 col-form-label">Conference Theme</Label>
                                                                            <Col md={5}>
                                                                            <AvField
                                                                            name="Conference Theme"
                                                                            placeholder="Eg: Tech Fest"
                                                                            type="text"
                                                                            errorMessage="Enter the Conference Theme"
                                                                            className="form-control"
                                                                            validate={{ required: { value: true } }}
                                                                            id="validationCustom01"
                                                                            onChange={this.handleConference_themeChange}
                                                                            />
                                                                            </Col>
                                                                        </FormGroup>
                                                                </Col>
                                                            </Row>
                                                            <Row>
                                                                <Col md="6">
                                                                    <FormGroup row>
                                                                        <Label Col md={4} htmlFor="validationCustom01" className="col-md-2 col-form-label">Organised by</Label>
                                                                        <Col md={5}>
                                                                        <AvField
                                                                        name="Organised_by"
                                                                        placeholder="Eg: Department of Computer Science"
                                                                        type="text"
                                                                        errorMessage="Enter the Organiser"
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
                    
                    </Container> 
                </div>
            </React.Fragment>
        );
    }
}

export default CollaborativeConferencesForm;