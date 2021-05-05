import React, { Component } from 'react';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import { Row, Col, Card, CardBody,  Label ,Container,Table,Form } from "reactstrap";
import moment from "moment";

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';


class Reports extends Component {
    constructor(props) {
        super(props);
        this.state={
            breadcrumbItems : [
                { title : "International Affairs Office", link : "#" },
                { title : "Reports", link : "#" },
            ], 
            IncomingFaculty:[],
            OutgoingFaculty:[],
            IncomingStudents:[],
            OutgoingStudents:[],
            isLoading: false,
            isError: false, 
        }
    }
    async getIncomingFaculty(){
        const response = await fetch(
          "http://localhost:8001/faculty/incoming-faculty"
        );
    
        if (response.ok) {
          const IncomingFaculty = await response.json();
          this.setState({ IncomingFaculty: IncomingFaculty, isLoading: false });
        } else {
          this.setState({
            IncomingFaculty: [4, 1, 2, 4, 1, 4],
            isError: true,
            isLoading: false,
          });
        }
      }
      async getIncomingStudents(){
        const response = await fetch(
          "http://localhost:8001/students/incoming-students"
        );
    
        if (response.ok) {
          const IncomingStudents = await response.json();
          this.setState({ IncomingStudents: IncomingStudents, isLoading: false });
        } else {
          this.setState({
            IncomingStudents: [4, 1, 2, 4, 1, 4],
            isError: true,
            isLoading: false,
          });
        }
      }
    componentDidMount() {
        this.setState({ isLoading: true });
        this.getIncomingFaculty();
        this.getOutgoingFaculty();
        this.getIncomingStudents();
        
      }
      async componentDidUpdate(prevProps) {
        console.log(prevProps);
        if (prevProps.state) {
          const response = await fetch(
            "http://localhost:8001/faculty/incoming-faculty",
            "http://localhost:8001/faculty/outgoing-faculty",
            "http://localhost:8001/students/incoming-students"
          );
    
          if (response.ok) {
            const IncomingFaculty = await response.json();
            console.log(IncomingFaculty);
            this.setState({ IncomingFaculty: IncomingFaculty, isLoading: false });
          } else {
            this.setState({
              IncomingFaculty: [4, 1, 2, 4, 1, 4],
              isError: true,
              isLoading: false,
            });
          }
        }
      }
      renderTableBody = () => {
        return this.state.IncomingFaculty.map((user) => {
          return (
            <tr key={user.id}>
              <td>{user.Name}</td>
              <td>{user.From_date}</td>
              <td>{user.To_date}</td>
              <td>{user.Designation}</td>

            </tr>
          );
        });
      };
      async getOutgoingFaculty(){
        const response = await fetch(
          "http://localhost:8001/faculty/outgoing-faculty"
        );
    
        if (response.ok) {
          const OutgoingFaculty = await response.json();
          this.setState({ OutgoingFaculty: OutgoingFaculty, isLoading: false });
        } else {
          this.setState({
            OutgoingFaculty: [4, 1, 2, 4, 1, 4],
            isError: true,
            isLoading: false,
          });
        }
      }
   
      
      renderOutgoingFaculty = () => {
        return this.state.OutgoingFaculty.map((user) => {
          return (
            <tr key={user.id}>
              <td>{user.Name}</td>
              <td>{user.Designation}</td>
              <td>{user.Funded_by}</td>
              <td>{user.Coordinating_department_or_office}</td>
              <td>{user.From_date}</td>
              <td>{user.To_date}</td>

            </tr>
          );
        });
      };
      renderIncomingStudents = () => {
        return this.state.IncomingStudents.map((user) => {
          return (
            <tr key={user.id}>
              <td>{user.Name_of_the_student}</td>
              <td>{moment(user.From_date).format("MM/DD/YYYY")}</td>
              <td>{moment(user.To_date).format("MM/DD/YYYY")}</td>
              <td>{user.Course_or_Activity_undertaken}</td>
              <td>{user.Coordinating_departmen_or_office}</td>

            </tr>
          );
        });
      };

    render() {
        return (
            <React.Fragment>
                <div className="page-content">
                    <Container fluid>

                    <Breadcrumbs title="Reports" breadcrumbItems={this.state.breadcrumbItems} />
                    
                    </Container> 
                </div>
                <Row>
                    <Col sm="12" md={{ size: 15, offset: 4 }}>
                        <Form inline>
                        
                            <Label for="download" className="mr-sm-2">Download All Reports</Label>
                            <ReactHTMLTableToExcel 
                                id="test-table-xls-button"
                                className="btn btn-primary"
                                table="tech-companies-1"
                                filename="All Record"
                                sheet="tablexls"
                                buttonText="Download"/>
                        </Form>
                    </Col>
                    <Col xs={12}>
                            <Card>
                                <CardBody>
                                <Row>
                              
                                </Row>
                                        <div className="table-rep-plugin">
                                            <div className="table-responsive mb-0" data-pattern="priority-columns">
                                                <Table id="tech-companies-1" striped bordered responsive>
                                                   
                                                    <thead>
                                                        <tr><th>Incoming Faculty</th></tr>
                                                        <tr>
                                                            <th>Name of the Faculty:</th>
                                                            <th data-priority="3">From Date: </th>
                                                            <th data-priority="1"> To Date:</th>
                                                            <th data-priority="3"> Designation:</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>{this.renderTableBody()}</tbody>
                                                    <thead>
                                                        <tr><th>Outgoing Faculty</th></tr>
                                                        <tr>
                                                        <th>Name of the Faculty:</th>
                                                            <th data-priority="1">Designation:</th>
                                                            <th data-priority="3">Funded by: </th>
                                                            <th data-priority="1"> Coordinating Department/Office:</th>
                                                            <th data-priority="3"> From Date:</th>
                                                            <th data-priority="1"> To Date:</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>{this.renderOutgoingFaculty()}</tbody>
                                                    
                                                        <tr><th>Incoming Students</th></tr>
                                                        
                                                        <thead>
                                                          <tr>
                                                            <th>Name_of_the_student:</th>
                                                            <th data-priority="1">From_date:</th>
                                                            <th data-priority="3">To_date: </th>
                                                            <th data-priority="1">
                                                              {" "}
                                                              Course_or_Activity_undertaken:
                                                            </th>
                                                            <th data-priority="3">
                                                              {" "}
                                                              Coordinating_departmen_or_office:
                                                            </th>
                                                            <th>Edit</th>
                                                            <th>Delete</th>
                                                          </tr>
                                                   
                                                        
                                                        </thead>
                                                    <tbody>{this.renderIncomingStudents()}</tbody>
                                                </Table>
                                                </div>
                                             </div>
                                        </CardBody>
                                    </Card>
                                </Col>
                </Row>
                
            </React.Fragment>
        );
    }
}

export default Reports;