import React, { Component } from 'react';
import { Row, Col, Card, CardBody, FormGroup, Button, Label,Container,} from "reactstrap";

import { AvForm, AvField } from "availity-reactstrap-validation";
import axios from '../../axios';


//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';

class CurriculumInternationalizationForm extends Component {
    constructor(props) {
        super(props);
        this.state={
            breadcrumbItems : [
                { title : "Curriculum Internationalization", link : "#" },
                { title : "Curriculum Internationalization Form", link : "#" },
            ],

            Curriculum_impact: 'Curriculum_impact',
            Department: "Department of Computer Science",

           

        }
        
        this.handleCurriculum_impactChange = this.handleCurriculum_impactChange.bind(this);
        this.handleDepartmentChange = this.handleDepartmentChange.bind(this);
        
        this.handleSubmit = this.handleSubmit.bind(this);

       
    }
     

    handleCurriculum_impactChange(event) {
        this.setState({Curriculum_impact: event.target.value});
    }
    handleDepartmentChange(event) {
        this.setState({Department: event.target.value});
    }
    
    handleSubmit(event) {
        event.preventDefault();
        const inter ={
            Curriculum_impact:this.state.Curriculum_impact,
            Department:this.state.Department
        }
        axios
          .post("http://localhost:8001/curriculum-impact/", inter)

          alert("Data Submitted");
      }

    
    render() {
        return (
            <React.Fragment>
                <div className="page-content">
                    <Container fluid>

                    <Breadcrumbs title="Curriculum Internationalization Form" breadcrumbItems={this.state.breadcrumbItems} />

                    <Row>
                            <Col xl="12">
                                <Card>
                                    <CardBody>
                                        <h4 className="card-title">Curriculum Internationalization Form</h4>

                                       <Row>
                                            <Col xs={12}>
                                                <Card onSubmit ={this.handleSubmit}>
                                                    <CardBody >
                                                        <AvForm className="needs-validation" >
                                                            <Row>
                                                                <Col md="6">
                                                                        <FormGroup row>
                                                                            <Label Col md={4} htmlFor="validationCustom01" className="col-md-2 col-form-label">Curriculum Impact</Label>
                                                                            <Col md={5}>
                                                                            <AvField
                                                                            name="Curriculum_impact"
                                                                            placeholder="Eg: Curriculum_impact"
                                                                            type="text"
                                                                            errorMessage="Enter the Curriculum_impact"
                                                                            className="form-control"
                                                                            validate={{ required: { value: true } }}
                                                                            id="validationCustom01"
                                                                            onChange={this.handleCurriculum_impactChange}
                                                                            />
                                                                            </Col>
                                                                        </FormGroup>
                                                                </Col>
                                                            </Row>
                                                                        <Row>
                                                                            <Col lg="6">
                                                                                    <FormGroup row>
                                                                                        <Label Col md={4} for="basicpill-firstname-input14" className="col-md-2 col-form-label">Department</Label>
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

export default CurriculumInternationalizationForm;