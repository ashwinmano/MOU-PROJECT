import React, { Component } from 'react';
import { Row, Col, Card, CardBody,FormGroup, Button, Label ,Container,Input } from "reactstrap";

import { AvForm, AvField} from "availity-reactstrap-validation";
import axios from '../../axios';


//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';

class CollaborativePublicationsForm extends Component {
    constructor(props) {
        super(props);
        this.state={
            breadcrumbItems : [
                { title : "Collaborative Publications", link : "#" },
                { title : "Collaborative Publications Form", link : "#" },
            ],

            Name_of_article: 'Article',
            Author: 'Jack Dawson',
            Name_of_journal: 'Journal',
            Volume_and_issue_no: '12/45',
            Date_of_publication: 24/7/2000,
            Affiliation: 'Christ University',
            Department: 'Department of Computer Science',

           
            

        }
        
        this.handleName_of_articleChange = this.handleName_of_articleChange.bind(this);
        this.handleAuthorChange = this.handleAuthorChange.bind(this);
        this.handleName_of_journalChange = this.handleName_of_journalChange.bind(this);
        this.handleVolume_and_issue_noChange = this.handleVolume_and_issue_noChange.bind(this);
        this.handleDate_of_publicationChange = this.handleDate_of_publicationChange.bind(this);
        this.handleAffiliationChange = this.handleAffiliationChange.bind(this);
        this.handleDepartmentChange = this.handleDepartmentChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);


        

        
    }
     
	

    handleName_of_articleChange(event) {
        this.setState({Name_of_article: event.target.value});
      }
    handleAuthorChange(event) {
        this.setState({Author: event.target.value});
      }
    handleName_of_journalChange(event) {
        this.setState({Name_of_journal: event.target.value});
      }
    handleVolume_and_issue_noChange(event) {
        this.setState({Volume_and_issue_no: event.target.value});
      }
    handleDate_of_publicationChange(event) {
        this.setState({Date_of_publication: event.target.value});
      }
    handleAffiliationChange(event) {
        this.setState({Affiliation: event.target.value});
      }
    handleDepartmentChange(event) {
        this.setState({Department: event.target.value});
      }
    
    handleSubmit(event) {
        event.preventDefault();
        const collab ={
            Name_of_article:this.state.Name_of_article,
            Author:this.state.Author,
            Name_of_journal:this.state.Name_of_journal,
            Volume_and_issue_no:this.state.Volume_and_issue_no,
            Date_of_publication:this.state.Date_of_publication,
            Affiliation:this.state.Affiliation,
            Department:this.state.Department
        }
        axios
          .post("http://localhost:8001/collaborations/publications", collab)

          alert("Data Submitted");
      }

   
        

    render() {
        return (
            <React.Fragment>
                <div className="page-content">
                    <Container fluid>

                    <Breadcrumbs title="Collaborative Publications Form" breadcrumbItems={this.state.breadcrumbItems} />

                    <Row>
                                            <Col xs={12}>
                                                <Card onSubmit ={this.handleSubmit}>
                                                    <CardBody >
                                                    <h4 className="card-title">Collaborative Publications Form</h4>
                                                        <AvForm className="needs-validation" >
                                                            <Row>
                                                                <Col md="6">
                                                                        <FormGroup row>
                                                                            <Label Col md={4} htmlFor="validationCustom01" className="col-md-2 col-form-label">Article Name</Label>
                                                                            <Col md={5}>
                                                                            <AvField
                                                                            name="Article Name"
                                                                            placeholder="Eg: Article"
                                                                            type="text"
                                                                            errorMessage="Enter the Article Name"
                                                                            className="form-control"
                                                                            validate={{ required: { value: true } }}
                                                                            id="validationCustom01"
                                                                            onChange={this.handleName_of_articleChange}
                                                                            />
                                                                            </Col>
                                                                        </FormGroup>
                                                                </Col>
                                                            </Row>
                                                            <Row>
                                                                <Col md="6">
                                                                    <FormGroup row>
                                                                        <Label Col md={4} htmlFor="validationCustom01" className="col-md-2 col-form-label">Author</Label>
                                                                        <Col md={5}>
                                                                        <AvField
                                                                        name="Author"
                                                                        placeholder="Eg: Jack Dawson"
                                                                        type="text"
                                                                        errorMessage="Enter the Author's name"
                                                                        className="form-control"
                                                                        validate={{ required: { value: true } }}
                                                                        id="validationCustom01"
                                                                        onChange={this.handleAuthorChange}
                                                                        />
                                                                        </Col>
                                                                    </FormGroup>
                                                                </Col>
                                                            </Row>
                                                            
                                                                    <Row>
                                                                            <Col lg="6">
                                                                                    <FormGroup row>
                                                                                        <Label Col md={4} for="basicpill-firstname-input14" className="col-md-2 col-form-label">Journal Name</Label>
                                                                                        <Col md={5}>
                                                                                        <AvField
                                                                                        name="Name_of_journal"
                                                                                        placeholder="Eg: Journal"
                                                                                        type="text"
                                                                                        errorMessage="Enter the Journal's name"
                                                                                        className="form-control"
                                                                                        validate={{ required: { value: true } }}
                                                                                        id="validationCustom01"
                                                                                        onChange={this.handleName_of_journalChange}
                                                                                        />
                                                                                            </Col>
                                                                                    </FormGroup>
                                                                                </Col>
                                                                        </Row>
                                                                    <Row>
                                                                            <Col lg="6">
                                                                                    <FormGroup row>
                                                                                        <Label Col md={4} for="basicpill-firstname-input14" className="col-md-2 col-form-label">Volume and Issue no</Label>
                                                                                        <Col md={5}>
                                                                                        <AvField
                                                                                        name="Volume_and_issue_no"
                                                                                        placeholder="Eg: 12/45"
                                                                                        type="text"
                                                                                        errorMessage="Enter the Volume and Issue no"
                                                                                        className="form-control"
                                                                                        validate={{ required: { value: true } }}
                                                                                        id="validationCustom01"
                                                                                        onChange={this.handleVolume_and_issue_noChange}
                                                                                        />
                                                                                        </Col>
                                                                                    </FormGroup>
                                                                                </Col>
                                                                        </Row>
                                                                        <Row>
                                                                        <Col lg = "6">
                                                                        <FormGroup row>
                                                                                
                                                                                    
                                                                                        <Label Col md={4} for="basicpill-firstname-input14" className="col-md-2 col-form-label">Date of publication</Label>
                                                                                        <Col md={5}>
                                                                                       
                                                                                    <Input className="form-control" type="date" defaultValue="2020-03-14" id="example-date-input"  onChange={this.handleDate_of_publicationChange} />
                                                                                        </Col>
                                                                                    
                                                                            </FormGroup>
                                                                            </Col>
                                                                        </Row>
                                                                        <Row>
                                                                            <Col lg = "6">
                                                                            <FormGroup row>
                                                                                
                                                                                    <Label Col md={4} for="basicpill-firstname-input14" className="col-md-2 col-form-label">Affiliation</Label>
                                                                                    <Col md={5}>
                                                                                    <AvField
                                                                                    name="Affiliation"
                                                                                    placeholder="Eg: University"
                                                                                    type="text"
                                                                                    errorMessage="Enter the Affiliation"
                                                                                    className="form-control"
                                                                                    validate={{ required: { value: true } }}
                                                                                    id="validationCustom01"
                                                                                    onChange={this.handleAffiliationChange}
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

export default CollaborativePublicationsForm;