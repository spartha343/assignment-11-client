import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Product.css';

const Product = (props) => {
    const { _id, name,price, vandor, pic, dis, qun } = props.product;
    return (
        <Card border="dark" className=''>
            <Card.Img variant="top" src={pic} />
            <Card.Body>
                <Card.Title>{name} Price: ${price}</Card.Title>
                <b style={{ display: "flex", justifyContent: "space-between", padding: "10px 0px" }}> <span>Supplier: {vandor}</span> <span>Quantity: {qun}</span></b>
                <Card.Text>
                    {
                        dis
                    }
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <Link to={`/singleItem/${_id}`}>
                    <Button id={_id} variant="dark">Update product</Button>
                </Link>
            </Card.Footer>
        </Card>
    );
};

export default Product;