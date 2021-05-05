import React from "react";
import { Row, Col, Container } from "reactstrap";

const Footer = () => {
  return (
    <React.Fragment>
              <footer className="footer">
                  <Container fluid>
                        <Row>
                            <Col sm={5}>
                                {new Date().getFullYear()} © International Affairs Office.
                            </Col>
                            <Col sm={3}>
                            <a href="/Credits">Credits</a>
                            </Col>
                            <Col sm={4}>
                                <div className="text-sm-right d-none d-sm-block">
                                    Crafted with <i className="mdi mdi-heart text-danger"></i> by Christ (Deemed to be) University, BSc CME and CMS
                                </div>
                            </Col>
                        </Row>
                  </Container>
              </footer>
    </React.Fragment>
  );
};

export default Footer;
