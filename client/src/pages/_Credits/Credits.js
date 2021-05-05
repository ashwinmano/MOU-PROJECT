import React, { Component } from 'react';
import { Container } from "reactstrap";
import './bootstrap.css';
import './froala_blocks.css';
import galleryImg1 from './images/ashwin.png';
import galleryImg2 from './images/ron.png';
import galleryImg3 from './images/satyajeet.png';

//Import Breadcrumb
// import Breadcrumbs from '../../components/Common/Breadcrumb';

class Credits extends Component {
    constructor(props) {
        super(props);
        this.state={
            breadcrumbItems : [
                { title : "International Affairs Office", link : "#" },
                { title : "Credits", link : "#" },
            ],
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="page-content">
                    <Container fluid>
                    
                    <section className="fdb-block team-2">
                        <div className="container">
                            <div className="row text-center justify-content-center">
                            <div className="col-8">
                                <h1>Meet Our Team</h1>
                            </div>
                            </div>

                            <div className="row-50"></div>

                            <div className="row text-center justify-content-center">
                            <div className="col-sm-3 m-sm-auto">
                                <img alt="" className="img-fluid rounded-circle" src={galleryImg1} />

                                <h3>Ashwin M</h3>
                                <p>Developer</p>
                            </div>

                            <div className="col-sm-3 m-sm-auto">
                                <img alt="" className="img-fluid rounded-circle" src={galleryImg2} />

                                <h3>Ron Varghese Jose</h3>
                                <p>Developer</p>
                            </div>

                            <div className="col-sm-3 m-sm-auto">
                                <img alt="" className="img-fluid rounded-circle" src={galleryImg3} />

                                <h3>Satyajeet Nag</h3>

                                <p>Developer</p>
                            </div>
                            </div>
                        </div>
                    </section>
                    
                    </Container> 
                </div>
                
            </React.Fragment>
        );
    }
}

export default Credits;