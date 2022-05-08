import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Imgbox from '../../ImageTextBOx/Imgbox';
import Partner from '../../Partner/Partner';
import Subscriber from '../../subcriber/Subscriber';
import Products from '../Products/Products';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>

            <Slider></Slider>
            <Products></Products>
            <Link to={'/allitems'}>
                <Button variant='info'>
                    Manage Inventories
                </Button>
            </Link>
            <Imgbox></Imgbox>
            <Partner></Partner>
            <Subscriber></Subscriber>
        </div>
    );
};

export default Home;