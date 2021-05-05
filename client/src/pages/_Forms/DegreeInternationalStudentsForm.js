import React, { Component } from 'react';
import { Row, Col, Card, CardBody, FormGroup, Button, Label, Container} from "reactstrap";

import { AvForm, AvField } from "availity-reactstrap-validation";

// Date Time Picker
import "react-datepicker/dist/react-datepicker.css";


// Form Editor
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';

class DegreeInternationalStudentsForm extends Component {
    constructor(props) {
        super(props);
        this.handleAcceptedFiles = this.handleAcceptedFiles.bind(this);
        this.state={
            breadcrumbItems : [
                { title : "Degree International Students", link : "#" },
                { title : "Degree International Students Form", link : "#" },
            ],
            selectedFiles: [],

            Country: 'USA',
            No_of_UG_students: "100",
            No_of_PG_students: '100',
            No_of_MPhil_or_PhD_students: '100',
            Total_no_of_students: '300',

            default_date: new Date(),
			default: false,
			start_date: new Date(),
			end_date: new Date(),

            

        }
        this.toggleTab.bind(this);
        this.toggleTabProgress.bind(this);
        
        this.handleCountryeChange = this.handleCountryeChange.bind(this);
        this.handleNo_of_UG_studentsChange = this.handleNo_of_UG_studentsChange.bind(this);
        this.handleNo_of_PG_studentsChange = this.handleNo_of_PG_studentsChange.bind(this);
        this.handleNo_of_MPhil_or_PhD_studentsChange = this.handleNo_of_MPhil_or_PhD_studentsChange.bind(this);
        this.handleTotal_no_of_studentsChange = this.handleTotal_no_of_studentsChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        // DatePicker
		this.handleStart = this.handleStart.bind(this);
		this.handleEnd = this.handleEnd.bind(this);
    }
     //DatePicker
	
	handleStart=(date)=> {
		this.setState({ start_date: date });
	}
	handleEnd=(date)=> {
		this.setState({ end_date: date });
	}
	

    handleCountryChange(event) {
        this.setState({Country: event.target.value});
    }
    handleNo_of_UG_studentsChange(event) {
        this.setState({No_of_UG_students: event.target.value});
    }
    handleNo_of_PG_studentsChange(event){
        this.setState({No_of_PG_students: event.target.value});
    }
    handleNo_of_MPhil_or_PhD_studentsChange(event){
        this.setState({No_of_MPhil_or_PhD_students: event.target.value});
    }
    handleTotal_no_of_studentsChange(event){
        this.setState({Total_no_of_students: event.target.value});
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

                    <Breadcrumbs title="Degree International Students Form" breadcrumbItems={this.state.breadcrumbItems} />


                    <Row>
                            <Col xl="12">
                                <Card>
                                    <CardBody>
                                        <h4 className="card-title">Degree International Students Form</h4>

                                       <Row>
                                            <Col xs={12}>
                                                <Card onSubmit ={this.handleSubmit}>
                                                    <CardBody >
                                                        <AvForm className="needs-validation" >
                                                            <Row>
                                                                <Col md="6">
                                                                        <FormGroup row>
                                                                            <Label Col md={4} htmlFor="validationCustom01" className="col-md-2 col-form-label">Country</Label>
                                                                            <Col md={5}>
                                                                            <AvField
                                                                            name="Country"
                                                                            placeholder="Eg: USA"
                                                                            type="text"
                                                                            errorMessage="Enter the Country"
                                                                            className="form-control"
                                                                            validate={{ required: { value: true } }}
                                                                            id="validationCustom01"
                                                                            onChange={this.handleCountryChange}
                                                                            />
                                                                            </Col>
                                                                        </FormGroup>
                                                                </Col>
                                                            </Row>
                                                            <Row>
                                                                <Col md="6">
                                                                    <FormGroup row>
                                                                        <Label Col md={4} htmlFor="validationCustom01" className="col-md-2 col-form-label">No of UG students</Label>
                                                                        <Col md={5}>
                                                                        <AvField
                                                                        name="No_of_UG_students"
                                                                        placeholder="Eg: 100"
                                                                        type="text"
                                                                        errorMessage="Enter the No of UG students"
                                                                        className="form-control"
                                                                        validate={{ required: { value: true } }}
                                                                        id="validationCustom01"
                                                                        onChange={this.handleNo_of_UG_studentsChange}
                                                                        />
                                                                        </Col>
                                                                    </FormGroup>
                                                                </Col>
                                                            </Row>
                                                            
                                                                    <Row>
                                                                            <Col lg="6">
                                                                                    <FormGroup row>
                                                                                        <Label Col md={4} for="basicpill-firstname-input14" className="col-md-2 col-form-label">No of PG students</Label>
                                                                                        <Col md={5}>
                                                                                        <AvField
                                                                                        name="No_of_PG_students"
                                                                                        placeholder="Eg: 100"
                                                                                        type="text"
                                                                                        errorMessage="Enter the No of PG students"
                                                                                        className="form-control"
                                                                                        validate={{ required: { value: true } }}
                                                                                        id="validationCustom01"
                                                                                        onChange={this.handleNo_of_PG_studentsChange}
                                                                                        />
                                                                                            </Col>
                                                                                    </FormGroup>
                                                                                </Col>
                                                                        </Row>
                                                                    <Row>
                                                                            <Col lg="6">
                                                                                    <FormGroup row>
                                                                                        <Label Col md={4} for="basicpill-firstname-input14" className="col-md-2 col-form-label">No of MPhil_or_PhD students</Label>
                                                                                        <Col md={5}>
                                                                                        <AvField
                                                                                        name="No_of_MPhil_or_PhD_students"
                                                                                        placeholder="Eg: 100"
                                                                                        type="text"
                                                                                        errorMessage="Enter the No of MPhil_or_PhD students"
                                                                                        className="form-control"
                                                                                        validate={{ required: { value: true } }}
                                                                                        id="validationCustom01"
                                                                                        onChange={this.handleNo_of_MPhil_or_PhD_studentsChange}
                                                                                        />
                                                                                        </Col>
                                                                                    </FormGroup>
                                                                                </Col>
                                                                        </Row>
                                                                        <Row>
                                                                        <Col lg = "6">
                                                                        <FormGroup row>
                                                                                
                                                                                    
                                                                                        <Label Col md={4} for="basicpill-firstname-input14" className="col-md-2 col-form-label">Total number of students</Label>
                                                                                        <Col md={5}>
                                                                                        <AvField
                                                                                        name="Total_no_of_students"
                                                                                        placeholder="Eg: 100"
                                                                                        type="text"
                                                                                        errorMessage="Enter the Total number of students"
                                                                                        className="form-control"
                                                                                        validate={{ required: { value: true } }}
                                                                                        id="validationCustom01"
                                                                                        onChange={this.handleTotal_no_of_studentsChange}
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

export default DegreeInternationalStudentsForm;