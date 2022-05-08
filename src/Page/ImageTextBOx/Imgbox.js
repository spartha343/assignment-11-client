import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Imgbox = () => {
    return (
        <Row >
            <Col md={6} sm={12} className="img">
                <img className='img-fluid' src="https://i.ibb.co/w67Cd98/DC-MAXI-FLEX-centring-tool-set-1-709x548.webp" alt="" />
            </Col>
            <Col md={6} sm={12} className="text">
                <h2>LINER YOU CAN TRUST</h2>
                <h3>We've lined hundreds of miles of pipe. With these liners, we'll line hundreds more.</h3>
            </Col>
        </Row>
    );
};

export default Imgbox;