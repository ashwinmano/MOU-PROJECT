import React, { Component } from 'react';
import { Row, Card, CardBody, Col} from "reactstrap";

//Import Vector Map Component
import Vector from "./Vectormap";

class RevenueByLocations extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menu : false
        }
    }
    
    render() {
        return (
            <React.Fragment>
                            <Col lg={8}>
                                <Card>
                                    <CardBody>
                                        {/* <Dropdown className="float-right" isOpen={this.state.menu} toggle={() => this.setState({menu : !this.state.menu})}>
                                            <DropdownToggle tag="i" className="darrow-none card-drop" aria-expanded="false">
                                                <i className="mdi mdi-dots-vertical"></i>
                                            </DropdownToggle>
                                            <DropdownMenu right>
                                                
                                                <DropdownItem href="">Sales Report</DropdownItem>
                                                
                                                <DropdownItem href="">Export Report</DropdownItem>
                                                
                                                <DropdownItem href="">Profit</DropdownItem>
                                                
                                                <DropdownItem href="">Action</DropdownItem>
                                            </DropdownMenu>
                                        </Dropdown> */}
.
                                        <h4 className="card-title mb-4">Partnered Universities by Locations</h4>

                                        <div id="world-vectormap" style={{height: "196px"}}>
                                        <Vector
                                          value="world_mill"
                                          width="800"
                                          height="400"
                                          color="#EAEAEA"
                                        />
                                        </div>

                                        <Row className="justify-content-center">
                                            <Col xl={5} md={6}>
                                                <div className="mt-2">
                                                    <div className="clearfix py-2">
                                                        <h5 className="float-right font-size-16 m-0">47</h5>
                                                        <p className="text-muted mb-0 text-truncate">USA :</p>
                                                        
                                                    </div>
                                                    <div className="clearfix py-2">
                                                        <h5 className="float-right font-size-16 m-0">32</h5>
                                                        <p className="text-muted mb-0 text-truncate">India :</p>
                                                        
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col xl={{size:5, offset:1}} md={6}>
                                                <div className="mt-2">
                                                    <div className="clearfix py-2">
                                                        <h5 className="float-right font-size-16 m-0">23</h5>
                                                        <p className="text-muted mb-0 text-truncate">Canada :</p>
                                                        
                                                    </div>
                                                    <div className="clearfix py-2">
                                                        <h5 className="float-right font-size-16 m-0">15</h5>
                                                        <p className="text-muted mb-0 text-truncate">Australia:</p>
                                                        
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                        {/* <div className="text-center mt-4">
                                            <Link to="#" className="btn btn-primary btn-sm">Learn more</Link>
                                        </div> */}
                                        
                                    </CardBody>
                                </Card>
                            </Col>
            </React.Fragment>
        );
    }
}

export default RevenueByLocations;