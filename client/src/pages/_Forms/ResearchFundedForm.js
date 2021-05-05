import React, { Component } from 'react';
import { Row, Col, Card, CardBody, FormGroup, Button, Label, Container,Input} from "reactstrap";

import { AvForm, AvField} from "availity-reactstrap-validation";

import axios from '../../axios';


//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';

class ResearchFundedForm extends Component {
    constructor(props) {
        super(props);
        this.state={
            breadcrumbItems : [
                { title : "Research", link : "#" },
                { title : "Research Project Funded Form", link : "#" },
            ],
            
            Project_name: 'Project Code',
            Team_members: 'Jack, Max, Luke',
            Project_status: 'Completed',
            Project_start_date: 24/7/2000,
            Project_end_date: 24/7/2000,
            Project_grant: '100000',
            Department: 'Department of Computer Science',

           
        }
        
        
        this.handleProject_nameChange = this.handleProject_nameChange.bind(this);
        this.handleTeam_membersChange = this.handleTeam_membersChange.bind(this);
        this.handleProject_statusChange = this.handleProject_statusChange.bind(this);
        this.handleProject_start_dateChange = this.handleProject_start_dateChange.bind(this);
        this.handleProject_end_dateChange = this.handleProject_end_dateChange.bind(this);
        this.handleProject_grantChange = this.handleProject_grantChange.bind(this);
        this.handleDeptChange = this.handleDeptChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        
    }
     //DatePicker
	

	

    handleProject_nameChange(event) {
        this.setState({Project_name: event.target.value});
      }
    handleTeam_membersChange(event) {
        this.setState({Team_members: event.target.value});
      }
    handleProject_statusChange(event){
        this.setState({Project_status: event.target.value});
      }
    handleProject_start_dateChange(event){
        this.setState({Project_start_date: event.target.value});
    }
    handleProject_end_dateChange(event){
        this.setState({Project_end_date: event.target.value});
    }
    handleProject_grantChange(event){
        this.setState({Project_grant: event.target.value});
    }
    handleDeptChange(event){
        this.setState({Department: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        const funded ={
            Project_name:this.state.Project_name,
            Team_members:this.state.Team_members,
            Project_status:this.state.Project_status,
            Project_start_date:this.state.Project_start_date,
            Project_end_date:this.state.Project_end_date,
            Project_grant:this.state.Project_grant,
            Department:this.state.Department
        }
        axios
          .post("http://localhost:8001/projects/funded", funded)

          alert("Data Submitted");
      }

    

      
    render() {
        return (
            <React.Fragment>
                <div className="page-content">
                    <Container fluid>

                    <Breadcrumbs title="Research Funded Form" breadcrumbItems={this.state.breadcrumbItems} />

                    <Row>
                            <Col xl="12">
                                <Card>
                                    <CardBody>
                                        <h4 className="card-title">Research Funded Form</h4>

                                       <Row>
                                            <Col xs={12}>
                                                <Card onSubmit ={this.handleSubmit}>
                                                    <CardBody >
                                                        <AvForm className="needs-validation" >
                                                            <Row>
                                                                <Col md="6">
                                                                        <FormGroup row>
                                                                            <Label Col md={4} htmlFor="validationCustom01" className="col-md-2 col-form-label">Project Name</Label>
                                                                            <Col md={5}>
                                                                            <AvField
                                                                            name="ProjectName"
                                                                            placeholder="Eg: Project Code"
                                                                            type="text"
                                                                            errorMessage="Enter the Project Name"
                                                                            className="form-control"
                                                                            validate={{ required: { value: true } }}
                                                                            id="validationCustom01"
                                                                            onChange={this.handleProject_nameChange}
                                                                            />
                                                                            </Col>
                                                                        </FormGroup>
                                                                </Col>
                                                            </Row>
                                                            <Row>
                                                                <Col md="6">
                                                                    <FormGroup row>
                                                                        <Label Col md={4} htmlFor="validationCustom01" className="col-md-2 col-form-label">Team Members</Label>
                                                                        <Col md={5}>
                                                                        <AvField
                                                                        name="TeamMembers"
                                                                        placeholder="Eg: Jack, Max, Luke"
                                                                        type="text"
                                                                        errorMessage="Enter the Team member's Name"
                                                                        className="form-control"
                                                                        validate={{ required: { value: true } }}
                                                                        id="validationCustom01"
                                                                        onChange={this.handleTeam_membersChange}
                                                                        />
                                                                        </Col>
                                                                    </FormGroup>
                                                                </Col>
                                                            </Row>
                                                            
                                                                    <Row>
                                                                            <Col lg="6">
                                                                                    <FormGroup row>
                                                                                        <Label Col md={4} className="col-md-2 col-form-label">Project Status</Label>
                                                                                        <Col md={5}>
                                                                                        <select className="custom-select" errorMessage="Enter the Project Status" onChange={this.handleTeam_membersChange}>
                                                                                        <option defaultValue>Select Project Status</option>
                                                                                        <option value="AE">Completed</option>
                                                                                        <option value="VI">In Progress</option>
                                                                                        <option value="MC">Started</option>
                                                                                        </select>
                                                                                            </Col>
                                                                                    </FormGroup>
                                                                                </Col>
                                                                        </Row>
                                                                    <Row>
                                                                            <Col lg="6">
                                                                                    <FormGroup row>
                                                                                        <Label Col md={4} for="basicpill-firstname-input14" className="col-md-2 col-form-label">Project Start Date</Label>
                                                                                        <Col md={5}>
                                                                                        
                                                                                        <Input className="form-control" type="date" defaultValue="2020-03-14" id="example-date-input"   onChange={this.handleProject_start_dateChange} />
                                                                                        </Col>
                                                                                    </FormGroup>
                                                                                </Col>
                                                                        </Row>
                                                                        <Row>
                                                                        <Col lg = "6">
                                                                        <FormGroup row>
                                                                                
                                                                                    
                                                                                        <Label Col md={4} for="basicpill-firstname-input14" className="col-md-2 col-form-label">Project End Date</Label>
                                                                                        <Col md={5}>
                                                                                        
                                                                                        <Input className="form-control" type="date" defaultValue="2020-03-14" id="example-date-input"   onChange={this.handleProject_end_dateChange} />
                                                                                        </Col>
                                                                                    
                                                                            </FormGroup>
                                                                            </Col>
                                                                        </Row>
                                                                        <Row>
                                                                            <Col lg = "6">
                                                                            <FormGroup row>
                                                                                
                                                                                    <Label Col md={4} for="basicpill-firstname-input14" className="col-md-2 col-form-label">Project Grant</Label>
                                                                                    <Col md={5}>
                                                                                    <AvField
                                                                                    name="Project Grant"
                                                                                    placeholder="Eg: 100000"
                                                                                    type="text"
                                                                                    errorMessage="Enter the Project Grant"
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
                                                                                        <Label Col md={4} for="basicpill-firstname-input14" className="col-md-2 col-form-label">Coordinating Department</Label>
                                                                                        <Col md={5}>
                                                                                        <AvField
                                                                                        name="Department"
                                                                                        placeholder="Eg: Department of Computer Science"
                                                                                        type="text"
                                                                                        errorMessage="Enter the Department"
                                                                                        className="form-control"
                                                                                        validate={{ required: { value: true } }}
                                                                                        id="validationCustom04"
                                                                                        onChange={this.handleDeptChange}
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

export default ResearchFundedForm;