import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';

//Import Components
import MiniWidgets from "./MiniWidgets";
import RevenueAnalytics from "./RevenueAnalytics";
import Analytics from "./Analytics";
import Analytics2 from "./Analytics2";
// import EarningReports from "./EarningReports";
// import Sources from "./Sources";
import RecentlyActivity from "./RecentlyActivity";
import RevenueByLocations from "./RevenueByLocations";
// import ChatBox from "./ChatBox";
// import LatestTransactions from "./LatestTransactions";

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbItems : [
                { title : "International Affairs Office", link : "/dashboard" },
                { title : "Dashboard", link : "/dashboard" },
            ],
            reports : [
                { icon : "ri-stack-line", title : "Number of MOUs Signed", value : "153", rate : "2.4%", desc : "From previous period" },
                { icon : "ri-user-line", title : "Number of Outgoing Students", value : "57", rate : "2.4%", desc : "From previous period" },
                { icon : "ri-user-2-line", title : "Number of Outgoing Faculty", value : "12", rate : "2.4%", desc : "From previous period" },
                { icon : "ri-survey-line", title : "Number of Joint Researches", value : "43", rate : "2.4%", desc : "From previous period" },
                { icon : "ri-survey-line", title : "Number of Joint Collaborations", value : "43", rate : "2.4%", desc : "From previous period" },
                { icon : "ri-book-2-line", title : "Students participated for dual degree ", value : "21", rate : "2.4%", desc : "From previous period" },
            ]
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="page-content">
                    <Container fluid>

                    <Breadcrumbs title="Dashboard" breadcrumbItems={this.state.breadcrumbItems} />
                        <Row>
                            <Col xl={8}>
                                <Row>
                                    <MiniWidgets reports={this.state.reports} />
                                </Row>
                                
                                {/* revenue Analytics */}
                                <RevenueAnalytics/>
                            </Col>

                            <Col xl={4}>

                                {/* sales Analytics */}
                                <Analytics/>
                                <Analytics2/>

                                {/* earning reports */}
                                {/* <EarningReports/> */}

                            </Col>
                        </Row>
                        

                        <Row>
                            {/* sources */}
                            {/* <Sources/> */}

                            {/* recent activity */}
                            <RecentlyActivity/>

                            {/* revenue by locations */}
                            <RevenueByLocations/>

                        </Row>
                        

                        {/* <Row>
                            //  chat box
                            <ChatBox/>

                            latest transactions
                            <LatestTransactions/>
                        </Row> */}

                    </Container> 
                </div>
            </React.Fragment>
        );
    }
}

export default Dashboard;
