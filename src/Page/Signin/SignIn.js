import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const SignIn = () => {
    const navigate=  useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const emailref = useRef('');
    const passwordref = useRef('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = emailref.current.value;
        const password = passwordref.current.value;
        createUserWithEmailAndPassword(email, password);
    }

    //error
    let errorElement;
    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
        
    }
        //navigate user to sign up
        const navigateRegister = event => {
            navigate('/login');
        }
    return (
        <div className='text-center pageHeight'>

            <div className='container w-50 mx-auto'>

                <h2 className='text-primary text-center mt-2'>Please SIgn Up</h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control ref={emailref} type="email" placeholder="Enter email" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control ref={passwordref} type="password" placeholder="Password" required />
                    </Form.Group>
                    <Button variant="primary w-50 mx-auto d-block mb-2" type="submit">
                        Sign Up
                    </Button>
                    <p>Already have Apexcipp Account?<Link to="/login" className='text-primary pe-auto text-decoration-none' onClick={navigateRegister}> Please login</Link> </p>
                </Form>
                {errorElement}

            </div>

        </div>
    );
};

export default SignIn;