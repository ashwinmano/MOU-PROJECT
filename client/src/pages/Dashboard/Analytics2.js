import React, { Component } from 'react';
import { Card, CardBody, Row, Col } from "reactstrap";

//Import Charts
import ReactApexChart from 'react-apexcharts';
import "./dashboard.scss";
import "./Analytics.scss";

class Analytics2 extends Component {
    state = {
        series: [40,60],
        options : {
            labels: ["Incoming Faculty", "Outgoing Faculty"],
            plotOptions: {
                pie: {
                    donut: {
                        size: '75%'
                    }
                }
            },
            dataLabels: {
                enabled: false
            },
            legend: {
                show: false,
            },
            colors: ['#5893d4','#ceddef'],
        
        }
    }
    render() {
        return (
            <React.Fragment>
                                <Card>
                                    <CardBody>
                                        {/* <div className="float-right">
                                            <select className="custom-select custom-select-sm">
                                                <option defaultValue>Apr</option>
                                                <option value="1">Mar</option>
                                                <option value="2">Feb</option>
                                                <option value="3">Jan</option>
                                            </select>
                                        </div> */}
                                        <h4 className="card-title mb-4">Faculty Analytics</h4>

                                        <div id="donut-chart" className="apex-charts">
                                        <ReactApexChart options={this.state.options} series={this.state.series} type="donut" height="230" />
                                        </div>

                                        <Row>
                                            <Col xs={4}>
                                                <div className="text-center mt-4">
                                                    <p className="mb-2 text-truncate"><i className="mdi mdi-circle blue3 font-size-10 mr-1"></i> Incoming Faculty</p>
                                                    <h5>40 %</h5>
                                                </div>
                                            </Col>
                                            <Col xs={4}>
                                                <div className="text-center mt-4">
                                                    <p className="mb-2 text-truncate"><i className="mdi mdi-circle blue4 font-size-10 mr-1"></i> Outgoing Faculty</p>
                                                    <h5>60 %</h5>
                                                </div>
                                            </Col>
                                        </Row>
                                    </CardBody>
                                </Card>
            </React.Fragment>
        );
    }
}

export default Analytics2;