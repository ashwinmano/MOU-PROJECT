import React, { Component } from 'react';
import { Row, Col, Card, CardBody, FormGroup, Button, Label ,Container} from "reactstrap";

import { AvForm, AvField } from "availity-reactstrap-validation";

// Date Time Picker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


// Form Editor
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';

class FacultyTaughtForm extends Component {
    constructor(props) {
        super(props);
        this.handleAcceptedFiles = this.handleAcceptedFiles.bind(this);
        this.state={
            breadcrumbItems : [
                { title : "Faculty Taught", link : "#" },
                { title : "Faculty Taught Form", link : "#" },
            ],
            selectedFiles: [],

            Name_of_person: 'Jack Dawson',
            Designation: "Professor",
            From_date: '24/7/2000',
            To_date: '24/7/2000',
            Topic: 'Topic',

            
            

        }
        
        
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleDesignationChange = this.handleDesignationChange.bind(this);
        this.handleFrDateChange = this.handleFrDateChange.bind(this);
        this.handleToDateChange = this.handleToDateChange.bind(this);
        this.handleTopicChange = this.handleTopicChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

       
    }
     //DatePicker
	
	
	

    handleNameChange(event) {
        this.setState({Name_of_person: event.target.value});
    }
    handleDesignationChange(event) {
        this.setState({Designation: event.target.value});
    }
    handleFrDateChange(event){
        this.setState({From_date: event.target.value});
    }
    handleToDateChange(event){
        this.setState({To_date: event.target.value});
    }
    handleTopicChange(event){
        this.setState({Topic: event.target.value});
    }

    handleSubmit(event) {
        alert('An entry is made: ' + this.state.studentName + this.state.indate);
        event.preventDefault();
      }

    handleAcceptedFiles = files => {
        files.map(file =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
            formattedSize: this.formatBytes(file.size)
          })
        );
    
        this.setState({ selectedFiles: files });
    };

        /**
     * Formats the size
     */
    formatBytes = (bytes, decimals = 2) => {
        if (bytes === 0) return "0 Bytes";
        const k = 1024;
        const dm = decimals < 0 ? 0 : decimals;
        const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
    };

    render() {
        return (
            <React.Fragment>
                <div className="page-content">
                    <Container fluid>

                    <Breadcrumbs title="CSA Incoming Faculty Form" breadcrumbItems={this.state.breadcrumbItems} />


                    <Row>
                            <Col xl="12">
                                <Card>
                                    <CardBody>
                                        <h4 className="card-title">CSA Incoming Faculty Form</h4>

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
                                                                        <Label Col md={4} htmlFor="validationCustom01" className="col-md-2 col-form-label">Designation of the Faculty</Label>
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
                                                                <Col lg = "6">
                                                                        <FormGroup row>
                                                                                    
                                                                                        <Label Col md={4} for="basicpill-firstname-input14" className="col-md-2 col-form-label">From Date</Label>
                                                                                        <Col md={5}>
                                                                                        <DatePicker
                                                                                            selected={this.state.start_date}
                                                                                            selectsStart
                                                                                            className="form-control"
                                                                                            placeholderText="From"
                                                                                            startDate={this.state.start_date}
                                                                                            endDate={this.state.end_date}
                                                                                           
                                                                                            onChange={this.handleFrDateChange}
                                                                                        />
                                                                                        </Col>
                                                                                    
                                                                            </FormGroup>
                                                                            </Col>
                                                                        </Row>
                                                                        <Row>
                                                                            <Col lg = "6">
                                                                            <FormGroup row>
                                                                                
                                                                                    <Label Col md={4} for="basicpill-firstname-input14" className="col-md-2 col-form-label">To Date</Label>
                                                                                    <Col md={5}>
                                                                                        <DatePicker
                                                                                            selected={this.state.end_date}
                                                                                            selectsEnd
                                                                                            className="form-control"
                                                                                            startDate={this.state.start_date}
                                                                                            endDate={this.state.end_date}
                                                                                            onChange={this.handleToDateChange}
                                                                                        />
                                                                                        </Col>
                                                                                    
                                                                            </FormGroup>
                                                                            </Col>
                                                                        </Row>
                                                                        <Row>
                                                                            <Col lg="6">
                                                                                    <FormGroup row>
                                                                                        <Label Col md={4} for="basicpill-firstname-input14" className="col-md-2 col-form-label">Topic</Label>
                                                                                        <Col md={5}>
                                                                                        <AvField
                                                                                        name="Topic"
                                                                                        placeholder="Enter the Topic Taught"
                                                                                        type="text"
                                                                                        errorMessage="Enter the Topic Taught"
                                                                                        className="form-control"
                                                                                        validate={{ required: { value: true } }}
                                                                                        id="validationCustom04"
                                                                                        onChange={this.handleTopicChange}
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

export default FacultyTaughtForm;