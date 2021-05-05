import React, { Component } from 'react';
import { Row, Col, Card, CardBody, CardTitle, CardSubtitle, FormGroup, Label, Input ,Container, InputGroup, Form, InputGroupAddon, TabContent, TabPane, NavItem, NavLink, Progress } from "reactstrap";

import classnames from 'classnames';

// Date Time Picker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

//Upload dropzone
import Dropzone from "react-dropzone";

// Form Editor
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import { Link } from "react-router-dom";
//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';


class NewTemplate extends Component {
    constructor(props) {
        super(props);
        this.state={
            breadcrumbItems : [
                { title : "Collaborators", link : "#" },
                { title : "New Template", link : "#" },
            ],
            selectedFiles: [],

            activeTab: 1,
            activeTabProgress: 1,
            progressValue : 25,

            
        };
        
        


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

      


  toggleTabProgress(tab) {
    if (this.state.activeTabProgress !== tab) {
        if(tab >= 1 && tab <=4 ){
            this.setState({
              activeTabProgress: tab
            });

          if(tab === 1) { this.setState({progressValue : 25}) }
          if(tab === 2) { this.setState({progressValue : 50}) }
          if(tab === 3) { this.setState({progressValue : 75}) }
          if(tab === 4) { this.setState({progressValue : 100}) }
        }
    }
}


    render() {
        return (
            <React.Fragment>
                <div className="page-content">
                    <Container fluid>
                    <Breadcrumbs title="New Template" breadcrumbItems={this.state.breadcrumbItems} />
                    <Row>
                    <Col lg="12">
                                <Card>
                                    <CardBody>
                                        <div id="progrss-wizard" className="twitter-bs-wizard">
                                            <ul className="twitter-bs-wizard-nav nav-justified nav nav-pills">
                                            <NavItem>
                                                                    <NavLink className={classnames({ active: this.state.activeTabProgress === 1 })} onClick={() => { this.toggleTabProgress(1); }} >
                                                                    <span className="step-number">01</span>
                                                                    <span className="step-title">Collaborator Details</span>
                                                                    </NavLink>
                                                                </NavItem>
                                                                <NavItem>
                                                                    <NavLink className={classnames({ active: this.state.activeTabProgress === 2 })} onClick={() => { this.toggleTabProgress(2); }} >
                                                                    <span className="step-number">02</span>
                                                                    <span className="step-title">MOU Details</span>
                                                                    </NavLink>
                                                                </NavItem>
                                                                <NavItem>
                                                                    <NavLink className={classnames({ active: this.state.activeTabProgress === 3 })} onClick={() => { this.toggleTabProgress(3); }} >
                                                                    <span className="step-number">03</span>
                                                                    <span className="step-title">Collaborator Page Details</span>
                                                                    </NavLink>
                                                                </NavItem>
                                                                <NavItem>
                                                                    <NavLink className={classnames({ active: this.state.activeTabProgress === 4 })} onClick={() => { this.toggleTabProgress(4); }} >
                                                                    <span className="step-number">04</span>
                                                                    <span className="step-title">Confirm Detail</span>
                                                                    </NavLink>
                                                                </NavItem>
                                            </ul>

                                            <div id="bar" className="mt-4">
                                                <Progress color="success" striped animated value={this.state.progressValue} />
                                            </div>
                                            <TabContent activeTab={this.state.activeTabProgress} className="twitter-bs-wizard-tab-content">
                                                <TabPane tabId={1}>
                                                    <Form>
                                                        <Row>
                                                            <Col lg="6">
                                                                    <FormGroup>
                                                                        <Label>Collaborator Type</Label>
                                                                        <select className="custom-select">
                                                                                <option defaultValue>Select Collaborator Type</option>
                                                                                <option value="AE">Partner University</option>
                                                                                <option value="VI">Professional International Organization (Eg - CIMA,CFA etc)</option>
                                                                                <option value="MC">Company / Organisational Partners (Eg - IT companies etc)</option>
                                                                        </select>
                                                                    </FormGroup>
                                                                </Col>
                                                            
                                                           
                                                        </Row>
                                                        <Row>
                                                            <Col lg="6">
                                                                    <FormGroup>
                                                                        <Label for="basicpill-firstname-input14">Name of Collaborator</Label>
                                                                        <Input type="text" className="form-control" id="basicpill-firstname-input14"/>
                                                                    </FormGroup>
                                                                </Col>
                                                        </Row>
                                                        <Row>
                                                            <Col lg="6">
                                                                    <FormGroup>
                                                                        <Label for="basicpill-firstname-input14">Country of Collaborator</Label>
                                                                        <Input type="text" className="form-control" id="basicpill-firstname-input14"/>
                                                                    </FormGroup>
                                                                </Col>
                                                        </Row>
                                                        <Row>
                                                            <Col>
                                                                <Label className="basicpill-firstname-input14">MOU Exists?</Label>
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                        <Col md={2}>
                                                            
                                                            <div className="form-check mb-3">
                                                                <Input className="form-check-input" type="radio" name="exampleRadios" id="Radios1" value="Yes" defaultChecked />
                                                                <Label className="form-check-label" htmlFor="exampleRadios1">
                                                                    Yes
                                                                </Label>
                                                            </div>
                                                                
                                                        </Col>
                                                        <Col>
                                                            <div className="form-check form-check-right">
                                                                <Input className="form-check-input" type="radio" name="exampleRadios" id="Radios2" value="No" />
                                                                <Label className="form-check-label" htmlFor="exampleRadios2">
                                                                     No
                                                                </Label>
                                                            </div>
                                                        </Col>
                                                        </Row>
                                                       <Row>
                                                           <Col lg = "6">
                                                           <FormGroup className="mb-0">
                                                                <div>
                                                                     <div>
                                                                        <Label for="basicpill-firstname-input14">MOU Signed on</Label>
                                                                        <DatePicker
                                                                            selected={this.state.start_date}
                                                                            selectsStart
                                                                            className="form-control"
                                                                            placeholderText="From"
                                                                            startDate={this.state.start_date}
                                                                            endDate={this.state.end_date}
                                                                            onChange={this.handleStart}
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </FormGroup>
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Col lg = "6">
                                                            <FormGroup className="mb-0">
                                                                <div>
                                                                    <div>
                                                                    <Label for="basicpill-firstname-input14">MOU Expiry Date</Label>
                                                                        <DatePicker
                                                                            selected={this.state.end_date}
                                                                            selectsEnd
                                                                            className="form-control"
                                                                            startDate={this.state.start_date}
                                                                            endDate={this.state.end_date}
                                                                            onChange={this.handleEnd}
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </FormGroup>
                                                           </Col>
                                                       </Row>
                                                       <Row>
                                                           <Col lg="6">
                                                                <FormGroup>
                                                                    <Label for="basicpill-phoneno-input3">Consultancy Amount (If any) </Label>
                                                                    <InputGroup>
                                                                        <InputGroupAddon addonType="prepend">
                                                                            <span className="input-group-text" id="validationTooltipUsernamePrepend">$</span>
                                                                        </InputGroupAddon>
                                                                    <Input type="text" className="form-control" id="basicpill-phoneno-input3"/>
                                                                    </InputGroup>
                                                                </FormGroup>
                                                            </Col>
                                                       </Row>
                                                        
                                                    </Form>
                                                </TabPane>
                                                <TabPane tabId={2}>
                                                  <div>
                                                    <Form>
                                                        <Row>
                                                        <Col xs={12}>
                                                            <Card>
                                                            <CardBody>
                                                                <CardTitle>Upload MOU</CardTitle>
                                                                <CardSubtitle className="mb-3"> Please Upload an MOU if any
                                                                </CardSubtitle>
                                                                <Form>
                                                                <Dropzone
                                                                    onDrop={acceptedFiles =>
                                                                    this.handleAcceptedFiles(acceptedFiles)
                                                                    }
                                                                >
                                                                    {({ getRootProps, getInputProps }) => (
                                                                    <div className="dropzone">
                                                                        <div
                                                                        className="dz-message needsclick mt-2"
                                                                        {...getRootProps()}
                                                                        >
                                                                        <input {...getInputProps()} />
                                                                        <div className="mb-3">
                                                                            <i className="display-4 text-muted ri-upload-cloud-2-line"></i>
                                                                        </div>
                                                                        <h4>Drop files here or click to upload.</h4>
                                                                        </div>
                                                                    </div>
                                                                    )}
                                                                </Dropzone>
                                                                <div
                                                                    className="dropzone-previews mt-3"
                                                                    id="file-previews"
                                                                >
                                                                    {this.state.selectedFiles.map((f, i) => {
                                                                    return (
                                                                        <Card
                                                                        className="mt-1 mb-0 shadow-none border dz-processing dz-image-preview dz-success dz-complete"
                                                                        key={i + "-file"}
                                                                        >
                                                                        <div className="p-2">
                                                                            <Row className="align-items-center">
                                                                            <Col className="col-auto">
                                                                                <img
                                                                                data-dz-thumbnail=""
                                                                                height="80"
                                                                                className="avatar-sm rounded bg-light"
                                                                                alt={f.name}
                                                                                src={f.preview}
                                                                                />
                                                                            </Col>
                                                                            <Col>
                                                                                <Link
                                                                                to="#"
                                                                                className="text-muted font-weight-bold"
                                                                                >
                                                                                {f.name}
                                                                                </Link>
                                                                                <p className="mb-0">
                                                                                <strong>{f.formattedSize}</strong>
                                                                                </p>
                                                                            </Col>
                                                                            </Row>
                                                                        </div>
                                                                        </Card>
                                                                    );
                                                                    })}
                                                                </div>
                                                                </Form>
                                                            </CardBody>
                                                            </Card>
                                                        </Col>
                                                        </Row>
                                                    </Form>
                                                  </div>
                                                </TabPane>
                                                <TabPane tabId={3}>
                                                    <div>
                                                      <Form>
                                                      <Row>
                                                            <Col>
                                                                <Card>
                                                                <CardBody>
                                                                    <CardTitle>Collaborator Page Details</CardTitle>
                                                                    <CardSubtitle className="mb-3">
                                                                    Kindly enter the content for this particular collaborator
                                                                    </CardSubtitle>

                                                                    <Form method="post">
                                                                    <Editor
                                                                        toolbarClassName="toolbarClassName"
                                                                        wrapperClassName="wrapperClassName"
                                                                        editorClassName="editorClassName"
                                                                    />
                                                                    </Form>

                                                                </CardBody>
                                                                </Card>
                                                            </Col>
                                                        </Row>
                                                      </Form>
                                                    </div>
                                                </TabPane>
                                                <TabPane tabId={4}>
                                                    <div className="row justify-content-center">
                                                        <Col lg="6">
                                                            <div className="text-center">
                                                                <div className="mb-4">
                                                                    <i className="mdi mdi-check-circle-outline text-success display-4"></i>
                                                                </div>
                                                                <div>
                                                                    <h5>Confirm Detail</h5>
                                                                    <p className="text-muted">If several languages coalesce, the grammar of the resulting</p>
                                                                </div>
                                                            </div>
                                                        </Col>
                                                    </div>
                                                </TabPane>
                                            </TabContent>
                                            <ul className="pager wizard twitter-bs-wizard-pager-link">
                                                <li className={this.state.activeTabProgress === 1 ? "previous disabled" : "previous"}><Link to="#" onClick={() => { this.toggleTabProgress(this.state.activeTabProgress - 1);} }>Previous</Link></li>
                                                <li className={this.state.activeTabProgress === 4 ? "next disabled" : "next"}><Link to="#" onClick={() => { this.toggleTabProgress(this.state.activeTabProgress + 1);} }>Next</Link></li>
                                            </ul>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>

                            {/* Wizard ends here */}
                        </Row>
            
                    
                    </Container> 
                </div>
            </React.Fragment>
        );
    }
}

export default NewTemplate ;