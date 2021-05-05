import React, { Component } from 'react';
import { Container } from "reactstrap";

import galleryImg1 from '../../IMG/grid-img-1.jpg';
import galleryImg2 from '../../IMG/grid-img-2.jpg';
import galleryImg3 from '../../IMG/grid-img-3.jpg';
import galleryImg4 from '../../IMG/grid-img-4.jpg';
import galleryImg5 from '../../IMG/grid-logo-1.jpg';
import galleryImg6 from '../../IMG/grid-logo-2.jpg';
import galleryImg7 from '../../IMG/grid-logo-3.jpg';
import galleryImg8 from '../../IMG/grid-logo-4.jpg';

import "./CollabVisits.css";
//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';


class CollaborativeVisits extends Component {
    constructor(props) {
        super(props);
        this.state={
            breadcrumbItems : [
                { title : "Collaborators", link : "#" },
                { title : "Colalborative Visits", link : "#" },
            ],
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="page-content">
                    <Container fluid>

                    <Breadcrumbs title="Collaborative Visits" breadcrumbItems={this.state.breadcrumbItems} />

                    <div>
      <div className="colab-wrapper">
        <div className="colab-grid">
            <div className="colab-grid-card">
                <div className="grid-card-head">
                    <img src={galleryImg1} className="card-img" alt=""/>
                    <div className="card-details">
                        <div className="card-uni">
                            <img src={galleryImg5} className="card-logo" alt=""/>
                            <h2 className="uni-title">
                                University Of XYZ
                            </h2>
                        </div>
                        <div className="card-meta">
                            <div className="meta">
                                <i className="fas fa-calendar-day"></i> 
                                <p>
                                    12 Apr 2021
                                </p> 
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid-card-body">
                    <div className="card-uni-desc">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit rerum tempore officiis modi quos rem ipsum nemo ratione error blanditiis dolorem vel culpa quia veritatis voluptate repellat, non nobis incidunt. Similique, expedita? Sunt, eos hic?
                        </p>
                    </div>
                    <a href="/University-XYZ" className="button">Read More</a>
                </div>
            </div>

            <div className="colab-grid-card">
                <div className="grid-card-head">
                    <img src={galleryImg2}  className="card-img" alt=""/>
                    <div className="card-details">
                        <div className="card-uni">
                            <img src={galleryImg6}  alt="" className="card-logo"/>
                            <h2 className="uni-title">
                                University Of XYZ
                            </h2>
                        </div>
                        <div className="card-meta">
                            <div className="meta">
                                <i className="fas fa-calendar-day"></i> 
                                <p>
                                    12 Apr 2021
                                </p> 
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid-card-body">
                    <div className="card-uni-desc">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit rerum  tempore officiis modi quos rem ipsum nemo ratione error blanditiis dolorem vel culpa quia veritatis voluptate repellat, non nobis incidunt. Similique, expedita? Sunt, eos hic?
                        </p>
                    </div>
                    <a href="//" className="button">Read More</a>
                </div>
            </div>
            <div className="colab-grid-card">
                <div className="grid-card-head">
                    <img src={galleryImg3}  className="card-img" alt="" />
                    <div className="card-details">
                        <div className="card-uni">
                            <img src={galleryImg7} alt="" className="card-logo"/>
                            <h2 className="uni-title">
                                University Of XYZ
                            </h2>
                        </div>
                        <div className="card-meta">
                            <div className="meta">
                                <i className="fas fa-calendar-day"></i> 
                                <p>
                                    12 Apr 2021
                                </p> 
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid-card-body">
                    <div className="card-uni-desc">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit rerum  tempore officiis modi quos rem ipsum nemo ratione error blanditiis dolorem vel culpa quia veritatis voluptate repellat, non nobis incidunt. Similique, expedita? Sunt, eos hic?
                        </p>
                    </div>
                    <a href="/" className="button">Read More</a>
                </div>
            </div>
            <div className="colab-grid-card">
                <div className="grid-card-head">
                    <img src={galleryImg4} alt="" className="card-img"/>
                    <div className="card-details">
                        <div className="card-uni">
                            <img src={galleryImg8} alt="" className="card-logo"/>
                            <h2 className="uni-title">
                                University Of XYZ
                            </h2>
                        </div>
                        <div className="card-meta">
                            <div className="meta">
                                <i className="fas fa-calendar-day"></i> 
                                <p>
                                    12 Apr 2021
                                </p> 
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid-card-body">
                    <div className="card-uni-desc">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit rerum  tempore officiis modi quos rem ipsum nemo ratione error blanditiis dolorem vel culpa quia veritatis voluptate repellat, non nobis incidunt. Similique, expedita? Sunt, eos hic?
                        </p>
                    </div>
                    <a href="/" className="button">Read More</a>
                </div>
            </div>
            <div className="colab-grid-card">
                <div className="grid-card-head">
                    <img src={galleryImg1} alt="" className="card-img"/>
                    <div className="card-details">
                        <div className="card-uni">
                            <img src={galleryImg5}  alt="" className="card-logo"/>
                            <h2 className="uni-title">
                                University Of XYZ
                            </h2>
                        </div>
                        <div className="card-meta">
                            <div className="meta">
                                <i className="fas fa-calendar-day"></i> 
                                <p>
                                    12 Apr 2021
                                </p> 
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid-card-body">
                    <div className="card-uni-desc">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit rerum tempore officiis modi quos rem ipsum nemo ratione error blanditiis dolorem vel culpa quia veritatis voluptate repellat, non nobis incidunt. Similique, expedita? Sunt, eos hic?
                        </p>
                    </div>
                    <a href="/" className="button">Read More</a>
                </div>
            </div>

            <div className="colab-grid-card">
                <div className="grid-card-head">
                    <img src={galleryImg2} alt="" className="card-img"/>
                    <div className="card-details">
                        <div className="card-uni">
                            <img src={galleryImg6} alt="" className="card-logo"/>
                            <h2 className="uni-title">
                                University Of XYZ
                            </h2>
                        </div>
                        <div className="card-meta">
                            <div className="meta">
                                <i className="fas fa-calendar-day"></i> 
                                <p>
                                    12 Apr 2021
                                </p> 
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid-card-body">
                    <div className="card-uni-desc">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit rerum  tempore officiis modi quos rem ipsum nemo ratione error blanditiis dolorem vel culpa quia veritatis voluptate repellat, non nobis incidunt. Similique, expedita? Sunt, eos hic?
                        </p>
                    </div>
                    <a href="/" className="button">Read More</a>
                </div>
            </div>
            <div className="colab-grid-card">
                <div className="grid-card-head">
                    <img src={galleryImg3} alt="" className="card-img"/>
                    <div className="card-details">
                        <div className="card-uni">
                            <img src={galleryImg7}  alt="" className="card-logo"/>
                            <h2 className="uni-title">
                                University Of XYZ
                            </h2>
                        </div>
                        <div className="card-meta">
                            <div className="meta">
                                <i className="fas fa-calendar-day"></i> 
                                <p>
                                    12 Apr 2021
                                </p> 
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid-card-body">
                    <div className="card-uni-desc">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit rerum  tempore officiis modi quos rem ipsum nemo ratione error blanditiis dolorem vel culpa quia veritatis voluptate repellat, non nobis incidunt. Similique, expedita? Sunt, eos hic?
                        </p>
                    </div>
                    <a href="/" className="button">Read More</a>
                </div>
            </div>
            <div className="colab-grid-card">
                <div className="grid-card-head">
                    <img src={galleryImg4} alt="" className="card-img"/>
                    <div className="card-details">
                        <div className="card-uni">
                            <img src={galleryImg8}  alt="" className="card-logo"/>
                            <h2 className="uni-title">
                                University Of XYZ
                            </h2>
                        </div>
                        <div className="card-meta">
                            <div className="meta">
                                <i className="fas fa-calendar-day"></i> 
                                <p>
                                    12 Apr 2021
                                </p> 
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid-card-body">
                    <div className="card-uni-desc">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit rerum  tempore officiis modi quos rem ipsum nemo ratione error blanditiis dolorem vel culpa quia veritatis voluptate repellat, non nobis incidunt. Similique, expedita? Sunt, eos hic?
                        </p>
                    </div>
                    <a href="/" className="button">Read More</a>
                </div>
            </div>
            <div className="colab-grid-card">
                <div className="grid-card-head">
                    <img src={galleryImg1} alt="" className="card-img"/>
                    <div className="card-details">
                        <div className="card-uni">
                            <img src={galleryImg5} alt="" className="card-logo"/>
                            <h2 className="uni-title">
                                University Of XYZ
                            </h2>
                        </div>
                        <div className="card-meta">
                            <div className="meta">
                                <i className="fas fa-calendar-day"></i> 
                                <p>
                                    12 Apr 2021
                                </p> 
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid-card-body">
                    <div className="card-uni-desc">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit rerum tempore officiis modi quos rem ipsum nemo ratione error blanditiis dolorem vel culpa quia veritatis voluptate repellat, non nobis incidunt. Similique, expedita? Sunt, eos hic?
                        </p>
                    </div>
                    <a href="/" className="button">Read More</a>
                </div>
            </div>

            <div className="colab-grid-card">
                <div className="grid-card-head">
                    <img src={galleryImg2} alt="" className="card-img"/>
                    <div className="card-details">
                        <div className="card-uni">
                            <img src={galleryImg6} alt="" className="card-logo"/>
                            <h2 className="uni-title">
                                University Of XYZ
                            </h2>
                        </div>
                        <div className="card-meta">
                            <div className="meta">
                                <i className="fas fa-calendar-day"></i> 
                                <p>
                                    12 Apr 2021
                                </p> 
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid-card-body">
                    <div className="card-uni-desc">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit rerum  tempore officiis modi quos rem ipsum nemo ratione error blanditiis dolorem vel culpa quia veritatis voluptate repellat, non nobis incidunt. Similique, expedita? Sunt, eos hic?
                        </p>
                    </div>
                    <a href="/" className="button">Read More</a>
                </div>
            </div>
            <div className="colab-grid-card">
                <div className="grid-card-head">
                    <img src={galleryImg3} alt="" className="card-img"/>
                    <div className="card-details">
                        <div className="card-uni">
                            <img src={galleryImg7} alt="" className="card-logo"/>
                            <h2 className="uni-title">
                                University Of XYZ
                            </h2>
                        </div>
                        <div className="card-meta">
                            <div className="meta">
                                <i className="fas fa-calendar-day"></i> 
                                <p>
                                    12 Apr 2021
                                </p> 
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid-card-body">
                    <div className="card-uni-desc">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit rerum  tempore officiis modi quos rem ipsum nemo ratione error blanditiis dolorem vel culpa quia veritatis voluptate repellat, non nobis incidunt. Similique, expedita? Sunt, eos hic?
                        </p>
                    </div>
                    <a href="/" className="button">Read More</a>
                </div>
            </div>
            <div className="colab-grid-card">
                <div className="grid-card-head">
                    <img src={galleryImg4} alt="" className="card-img"/>
                    <div className="card-details">
                        <div className="card-uni">
                            <img src={galleryImg8} alt="" className="card-logo"/>
                            <h2 className="uni-title">
                                University Of XYZ
                            </h2>
                        </div>
                        <div className="card-meta">
                            <div className="meta">
                                <i className="fas fa-calendar-day"></i> 
                                <p>
                                    12 Apr 2021
                                </p> 
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid-card-body">
                    <div className="card-uni-desc">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit rerum  tempore officiis modi quos rem ipsum nemo ratione error blanditiis dolorem vel culpa quia veritatis voluptate repellat, non nobis incidunt. Similique, expedita? Sunt, eos hic?
                        </p>
                    </div>
                    <a href="/" className="button">Read More</a>
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

export default CollaborativeVisits;