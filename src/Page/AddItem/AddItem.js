
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';

const AddItem = () => {
    const [user, loading, error] = useAuthState(auth);
    console.log(user.email);
    const addItem = (e) => {
        e.preventDefault();
        const Pname = e.target.name.value;

        const pimg = e.target.image.value;
        const pdis = e.target.discription.value;
        const pquantity = e.target.quantity.value;
        const pvendor = e.target.vendor.value;
        const pPrice = e.target.price.value;
        
        let info = { price: pPrice, pic: pimg, name: Pname, dis: pdis, qun: pquantity, vandor: pvendor }

        console.log(JSON.stringify(info));
        const url = 'https://boiling-taiga-43544.herokuapp.com/additem';
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(info)
        })
            .then(res => res.json())
            .then(result => {
                if (result) {

                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });

        // axios({
        //     method:'post',
        //     url: url,
        //     data:{price:pPrice, pic:pimg, name:Pname, dis:pdis, qun:pquantity, vandor:pvendor}
        // });
    }
    return (
        <div className='p-5'>
            <h2>Add new Product here</h2>
            <Form onSubmit={addItem}>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label></Form.Label>
                    <Form.Control type="text" placeholder="name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="image">
                    <Form.Label></Form.Label>
                    <Form.Control type="text" placeholder="image Url" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="price">
                    <Form.Label></Form.Label>
                    <Form.Control type="number" step="any" placeholder="price" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="discription">
                    <Form.Label></Form.Label>
                    <Form.Control type="textarea" placeholder="Discription" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="quantity">
                    <Form.Label></Form.Label>
                    <Form.Control type="number" placeholder="Quantity" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="vendor">
                    <Form.Label></Form.Label>
                    <Form.Control type="text" placeholder="Supplier" />
                </Form.Group>


                {/* /submit  */}
                <Button variant="dark" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default AddItem;