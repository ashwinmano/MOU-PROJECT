import React, { Component } from 'react';
import { Container } from "reactstrap";
import galleryImg1 from '../../../IMG/gallery1.jpg';
import galleryIMg2 from '../../../IMG/gallery2.jpg';
import galleryLogo from '../../../IMG/gallery-logo.jpg';

import "../Universities/University.css";

//Import Breadcrumb
import Breadcrumbs from '../../../components/Common/Breadcrumb';


class UniversityXYZ extends Component {
    constructor(props) {
        super(props);
        this.state={
            breadcrumbItems : [
                { title : "Collaborative Visits", link : "#" },
                { title : "University XYZ", link : "/University-XYZ" },
            ],
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="page-content">
                    <Container fluid>

                    <Breadcrumbs title="University XYZ" breadcrumbItems={this.state.breadcrumbItems} />
                    <div>
        <div className="university">
        <div className="banner">
            <div className="bread">
                <div className="arrow-link">
                    <a href="/dashboard"><i className="fas fa-arrow-circle-left"></i></a>
                </div>
                <div className="bread-crumb">
                    <h4>
                        <span className="uni"><a href="/#">University</a> /</span> <a href="/#">Harvard University</a>
                    </h4>
                </div>
            </div>
            <div className="banner-title">
                <h2>Harvard University</h2>
                <h4 className="tagline">"Veritas"</h4>
            </div>
        </div>
        <div className="uni-map">
            <div className="map-container">
                <iframe title="unique" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2947.382247540628!2d-71.11884878467725!3d42.37700287918573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e377427d7f0199%3A0x5937c65cee2427f0!2sHarvard%20University!5e0!3m2!1sen!2sin!4v1617976500361!5m2!1sen!2sin" allowfullscreen="" loading="lazy"></iframe>
            </div>
        </div>
        <div className="uni-content">
            <div className="uni-description">
                <p>
                    Harvard is at the frontier of academic and intellectual discovery. Those who venture here—to learn, research, teach, work, and grow—join nearly four centuries of students and scholars in the pursuit of truth, knowledge, and a better world.
                </p>
                <h4>
                    "As a research university and nonprofit institution, Harvard is focused on creating educational opportunities for people from many lived experiences."
                </h4>
                <p>
                    It was a question of which of the two she preferred. On the one hand, the choice seemed simple. The more expensive one with a brand name would be the choice of most. It was the easy choice. The safe choice. But she wasn't sure she actually preferred it. 
                    There was little doubt that the bridge was unsafe. All one had to do was look at it to know that with certainty. Yet Bob didn't see another option. He may have been able to work one out if he had a bit of time to think things through, but time was something he didn't have. A choice needed to be made, and it needed to be made quickly.
                    She was in a hurry. Not the standard hurry when you're in a rush to get someplace, but a frantic hurry. The type of hurry where a few seconds could mean life or death. She raced down the road ignoring speed limits and weaving between cars. She was only a few minutes away when traffic came to a dead standstill on the road ahead.
                </p>
            </div>
            <div className="uni-gallery">
                <div className="uni-card">
                    <div className="uni-img">
                        <img src={galleryImg1} alt="galleryImg1"/>
                    </div>
                    <div className="uni-card-des">
                        <h3>Hi there Harvard</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi qui mollitia error, fugiat labore quam eveniet obcaecati necessitatibus saepe iusto minima distinctio consequatur optio soluta perspiciatis et ipsum suscipit doloribus.</p>
                    </div>
                </div>
                <div className="uni-card">
                    <div className="uni-img">
                        <img src={galleryLogo} alt="galleryLogo"/>
                    </div>
                    <div className="uni-card-des">
                        <h3>Hi there Harvard</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi qui mollitia error, fugiat labore quam eveniet obcaecati necessitatibus saepe iusto minima distinctio consequatur optio soluta perspiciatis et ipsum suscipit doloribus.</p>
                    </div>
                </div>
                <div className="uni-card">
                    <div className="uni-img">
                        <img src={galleryIMg2} alt="galleryImg2"/>
                    </div>
                    <div className="uni-card-des">
                        <h3>Hi there Harvard</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi qui mollitia error, fugiat labore quam eveniet obcaecati necessitatibus saepe iusto minima distinctio consequatur optio soluta perspiciatis et ipsum suscipit doloribus.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
                    
                    </Container> 
                </div>
            </React.Fragment>
        );
    }
}

export default UniversityXYZ;