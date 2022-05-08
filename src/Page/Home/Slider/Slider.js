import React from "react";
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Slider.css';
class Slider extends React.Component {
    render() {
        return (

            <div className=' slider mb-5' >
                <div className="row">
                    <div className="col-12">
                        <Carousel>
                            <Carousel.Item className="slider-item">
                                <img
                                    className="d-block w-100"
                                    src="https://picsum.photos/500/300?img=1"
                                    alt=""
                                />
                                <Carousel.Caption>
                                    <h3>Contact us</h3>
                                    <p>Contact Us and get your parts</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item className="slider-item">
                                <img
                                    className="d-block w-100"
                                    src="https://picsum.photos/500/300?img=2"
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h3>The best company on the market</h3>
                                    <p>We are waiting for your call.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
            </div>
        );
    }
}

export default Slider;