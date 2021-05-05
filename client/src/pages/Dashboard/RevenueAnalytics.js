import React, { Component } from 'react';
import { Row, Col, Card, CardBody, ButtonGroup, Button } from 'reactstrap';

//Import Charts
import ReactApexChart from 'react-apexcharts';
import "./dashboard.scss";
import "./Analytics.scss"
class RevenueAnalytics extends Component {
    state = {
        series: [{
            name: '2020',
            type: 'column',
            data: [12,14,16,20,8,7,23,32,24,15,18,16]
        }, {
            name: '2019',
            type: 'line',
            data: [10,12,15,18,7,9,21,18,23,12,17,15]
        }],
        options : {
            chart: {
                toolbar: {
                    show: false,
                }
            },
            stroke: {
                width: [0, 3],
                curve: 'smooth'
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '20%',
                },
            },
            dataLabels: {
                enabled: false,
            },
        
            legend: {
                show: false,
            },
            colors: ['#1f3c88', '#810000'],
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        }        
    }
    render() {
        return (
            <React.Fragment>
                                <Card>
                                    <CardBody>
                                        <div className="float-right d-none d-md-inline-block">
                                            <ButtonGroup className="mb-2">
                                                <Button size="sm" color="light" type="button">Today</Button>
                                                <Button size="sm" color="light" active type="button">Weekly</Button>
                                                <Button size="sm" color="light" type="button">Monthly</Button>
                                            </ButtonGroup>
                                        </div>
                                        <h4 className="card-title mb-4">Number of Activities</h4>
                                        <div>
                                            <div id="line-column-chart" className="apex-charts" dir="ltr">
                                            <ReactApexChart options={this.state.options} series={this.state.series} type="line" height="280" />
                                            </div>
                                        </div>
                                    </CardBody>

                                    <CardBody className="border-top text-center">
                                        <Row>
                                            <Col sm={4}>
                                                <div className="d-inline-flex">
                                                    <h5 className="mr-2">12</h5>
                                                    <div className="Red1">
                                                        <i className="mdi mdi-menu-up font-size-14"> </i>2.2 %
                                                    </div>
                                                </div>
                                                <p className="text-muted text-truncate mb-0">This month</p>
                                            </Col>

                                            <Col sm={4}>
                                                <div className="mt-4 mt-sm-0">
                                                    <p className="mb-2 text-muted text-truncate"><i className="mdi mdi-circle blue1 font-size-10 mr-1"></i> This Year :</p>
                                                    <div className="d-inline-flex">
                                                        <h5 className="mb-0 mr-2">156</h5>
                                                        <div className="Red1">
                                                            <i className="mdi mdi-menu-up font-size-14"> </i>2.1 %
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col sm={4}>
                                                <div className="mt-4 mt-sm-0">
                                                    <p className="mb-2 text-muted text-truncate"><i className="mdi mdi-circle Red1 font-size-10 mr-1"></i> Previous Year :</p>
                                                    <div className="d-inline-flex">
                                                        <h5 className="mb-0">205</h5>
                                                    </div>
                                                </div>
                                            </Col>

                                        </Row>
                                    </CardBody>
                                </Card>
            </React.Fragment>
        );
    }
}

export default RevenueAnalytics;