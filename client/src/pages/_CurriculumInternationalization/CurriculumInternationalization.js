import React, { Component } from 'react';
import { Container, Row, Col, Card, Table} from "reactstrap";
import CardBody from 'reactstrap/lib/CardBody';
import { Link } from "react-router-dom";
import ReactHTMLTableToExcel from 'react-html-table-to-excel';


//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';


class CurriculumInternationalization extends Component {
    constructor(props) {
        super(props);
        this.state={
            breadcrumbItems : [
                { title : "International Affairs Office", link : "#" },
                { title : "Curriculum Internationalization", link : "#" },
            ],
            users:[],
            isLoading: false,
            isError: false,
        }
    }
    async getAll(){
        const response = await fetch(
          "http://localhost:8001/curriculum-impact/"
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
            "http://localhost:8001/curriculum-impact/"
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
        return this.state.users.map((user) => {
          return (
            <tr key={user.id}>
              <td>{user.Curriculum_impact}</td>
              <td>{user.Department}</td>
              
              
            </tr>
          );
        });
      };

    render() {
        return (
            <React.Fragment>
                <div className="page-content">
                    <Container fluid>

                    <Breadcrumbs title="Curriculum Internationalization" breadcrumbItems={this.state.breadcrumbItems} />
                    <Row>
                        <Col xs={12}>
                            <Card>
                                <CardBody>
                                <Row>
                                <Col xs ={9}></Col>
                                <Col xs={3}>
                                <Link to="/Curriculum-Internationalization-Form"> 
                                <button type="button" class="btn btn-primary mr-2" >Add New</button>
                                </Link>  
                                <ReactHTMLTableToExcel 
                                id="test-table-xls-button"
                                className="btn btn-success"
                                table="tech-companies-1"
                                filename="Curriculum International"
                                sheet="tablexls"
                                buttonText="Export"/>
                                </Col>
                                </Row>
                                        <div className="table-rep-plugin">
                                            <div className="table-responsive mb-0" data-pattern="priority-columns">
                                                <Table id="tech-companies-1" striped bordered responsive>
                                                   
                                                    <thead>
                                                        <tr>
                                                            <th>Curriculum Impact:</th>
                                                            <th data-priority="1">Department:</th>
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
                    </Container> 
                </div>
            </React.Fragment>
        );
    }
}

export default CurriculumInternationalization;