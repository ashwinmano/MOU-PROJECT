import React, { Component } from 'react';
import { Container, Row, Col, Card, Table} from "reactstrap";
import CardBody from 'reactstrap/lib/CardBody';
import { Link } from "react-router-dom";
import moment from "moment";
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';


class IncomingStudents extends Component {
    constructor(props) {
        super(props);
        this.state={
            breadcrumbItems : [
                { title : "Students", link : "#" },
                { title : "Incoming Students", link : "#" },
            ],
            users: [],
            isLoading: false,
            isError: false,
            Name_of_the_student: "Common",
            From_date: "24/7/2000",
            To_date: "24/7/2000",
            Course_or_Activity_undertaken: "history",
            Coordinating_departmen_or_office: "None",

        }
    }
    async getAll(){
        const response = await fetch(
          "http://localhost:8001/students/incoming-students"
        );
    
        if (response.ok) {
          const users = await response.json();
          this.setState({ users: users, isLoading: false });
        } else {
          this.setState({
            users: [4, 1, 2, 4, 1, 4],
            isError: true,
            isLoading: false,
          });
        }
      }
      componentDidMount() {
        this.setState({ isLoading: true });
        this.getAll();
        
      }
    
      async componentDidUpdate(prevProps) {
        console.log(prevProps);
        if (prevProps.state) {
          const response = await fetch(
            "http://localhost:8001/students/incoming-students"
          );
    
          if (response.ok) {
            const users = await response.json();
            console.log(users);
            this.setState({ users: users, isLoading: false });
          } else {
            this.setState({
              users: [4, 1, 2, 4, 1, 4],
              isError: true,
              isLoading: false,
            });
          }
        }
      }
      renderTableBody = () => {
        const testDate = this.state.users.sort(
          (a, b) =>
            moment(b.From_date).format("MM/DD/YYYY") -
            moment(a.From_date).format("MM/DD/YYYY")
        );
        console.log(testDate);
        return this.state.users.map((user) => {
          return (
            <tr key={user.id}>
              <td>{user.Name_of_the_student}</td>
              <td>{moment(user.From_date).format("MM/DD/YYYY")}</td>
              <td>{moment(user.To_date).format("MM/DD/YYYY")}</td>
              <td>{user.Course_or_Activity_undertaken}</td>
              <td>{user.Coordinating_departmen_or_office}</td>
              <td><button className="btn btn-primary">Edit</button></td>
              <td><button className="btn btn-danger">Delete</button></td>
            </tr>
          );
        });
      };

      render() {
        return (
            <React.Fragment>
                <div className="page-content">
                    <Container fluid>

                    <Breadcrumbs title="Incoming Students" breadcrumbItems={this.state.breadcrumbItems} />
                    
                    </Container> 

                    
                    <Row>
                        <Col xs={12}>
                            <Card>
                                <CardBody>
                                <Row>
                                <Col xs ={9}></Col>
                                <Col xs={3}>
                                <Link to="/Incoming-students-form"> 
                                <button type="button" class="btn btn-primary mr-2" >Add New</button>
                                </Link>  
                                <ReactHTMLTableToExcel 
                                id="test-table-xls-button"
                                className="btn btn-success"
                                table="tech-companies-1"
                                filename="tablexls"
                                sheet="tablexls"
                                buttonText="Export"/>
                                </Col>
                                </Row>
                                <Row>
            <Col xs={12}>
                                              <Card>
                                                <CardBody>
                                                  <h4 className="card-title">Incoming students</h4>
                                                  <div className="table-rep-plugin">
                                                    <div
                                                      className="table-responsive mb-0"
                                                      data-pattern="priority-columns"
                                                    >
                                                      <Table id="tech-companies-1" striped bordered responsive>
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
                                                        <tbody>{this.renderTableBody()}</tbody>
                                                      </Table>
                                                    </div>
                                                  </div>
                                                </CardBody>
                                              </Card>
                                            </Col>
                                          </Row>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                        </div>
                        
            </React.Fragment>
        );
    }
}

export default IncomingStudents;