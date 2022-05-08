import React, { useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import useSingleItem from '../../hooks/useSingleItem';
//import './SingleItem.css';
const UserItm = (props) => {
    const { _id, name,price, vandor, pic, dis, qun } = props.item;
    console.log(props);

    const id = props.item._id;

   // const { _id, name,price, vandor, pic, dis, qun } = item;
    //delivered function
    const [itemquantiry, setitemquantiry] = useState(qun);
    console.log(qun);
    const delivered = (e) => {
        const newquantity = (itemquantiry || qun) - 1;
        if (qun > -1) {
            const info = { id: _id, quantity: newquantity }
            fetch(`https://boiling-taiga-43544.herokuapp.com/item/userupdate/${_id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(info),
            })
                .then(response => response.json())
                .then(data => {
                    if (data) {
                        setitemquantiry(newquantity)
                    }
                })
                .catch((error) => {
                    console.error('Error:', error);
                });

        }
    }

    const setquantity = (e) => {
        e.preventDefault();
        const quantity = e.target.quantity.value;
        const info = { id: _id, quantity: quantity }
        fetch(`https://boiling-taiga-43544.herokuapp.com/item/userupdate/${_id}`, {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(info),
        })
            .then(response => response.json())
            .then(data => {
                if (data) {
                    setitemquantiry(quantity)
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    //delete
    const deleteItem = () => {
        const confirm = window.confirm("sometext");
        if (confirm) {
            fetch(`https://boiling-taiga-43544.herokuapp.com/useritem/delete/${_id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data) {
                        const container = document.getElementById(id);
                        return container.parentNode.removeChild(container);
                    }
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        }

    }
    return (
        <div className='mb-5' id={_id}>

            <Card body>
                <Row className='item_container' row>
                    <Col lg={3} md={12} sm={12} xs={12} className="img">
                        <img src={pic} width="200px" alt="" />
                    </Col>
                    <Col lg={4} md={12} sm={12} xs={12} className="body">
                        <div>
                            <h3>{name}</h3>   
                            <p>Price: ${price} Supplier: {vandor}  </p>
                        </div>
                        <p>{dis}</p>

                    </Col>
                    <Col lg={2} md={6} sm={6} xs={12} className="quantity">
                        <h4>quantity: {itemquantiry || qun}</h4>
                        <Button variant="dark" onClick={delivered}>
                            Delivered
                        </Button>
                    </Col>
                    <Col lg={3} md={6} sm={6} xs={12}>
                        <form onSubmit={setquantity} id={_id}>
                            <h2>restock </h2>
                            <input placeholder={itemquantiry || qun} name='quantity' type="number" />
                            <Button variant="dark" type="submit">
                                Update Quantity
                            </Button>
                        </form>
                        <Button variant="danger" onClick={deleteItem}>Delete This Item

                        </Button>
                    </Col>
                </Row>
            </Card>


        </div>
    );
};

export default UserItm;