import React, { useRef } from 'react';
import { Button, Form, ProgressBar } from 'react-bootstrap';
import auth from '../../firebase.init';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';

const Login = () => {


    //email sign in 
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const locaion = useLocation();

    let from = locaion.state?.from?.pathname || '/';

    let errorElement;


    const [signInWithGoogle, Guser, Gloading, Gerror] = useSignInWithGoogle(auth);
    //google sign in
    const googleSignin = async () => {
        const data = await signInWithGoogle();
        localStorage.setItem('access_token', data.access_token)
        if (user) {
            return navigate(from, { replace: true });
        }
    }

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending, reseterror] = useSendPasswordResetEmail(
        auth
      );

    //handle reset password

    const HandleResetpass = ()=> {
       
        const email = emailRef.current.value;
        sendPasswordResetEmail(email);
        toast('Check Your Email For Instraction');

    }

    //handle password signin
    const handleSubmit = async e => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        await signInWithEmailAndPassword(email, password);
        const { data } = await axios.post('https://boiling-taiga-43544.herokuapp.com/login', { email });
        localStorage.setItem('access_token', data.access_token)
        e.target.reset();

    }


    //navigate user to sign up
    const navigateRegister = event => {
        navigate('/signup');
    }


    if (loading) {
         toast('Loading');
    }


    if (error || Gerror || reseterror) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }
    if (user || Guser) {
        return navigate(from, { replace: true });
    }

    return (
        <div className='text-center pageHeight'>

            <div className='container w-50 mx-auto'>

                <h2 className='text-primary text-center mt-2'>Please Login</h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                    </Form.Group>
                    <Button variant="primary w-50 mx-auto d-block mb-2" type="submit">
                        Login
                    </Button>
                    <Button variant="primary w-50 mx-auto d-block mb-2" onClick={HandleResetpass}>
                        Reset Password
                    </Button>
                </Form>
                {errorElement}
                <p>New to apexcipp?<Link to="/signup" className='text-primary pe-auto text-decoration-none' onClick={navigateRegister}>Please Register</Link> </p>
            </div>

            <div className='d-flex py-5'>
                <span className='w-50 m-auto'><ProgressBar variant="info" now={100} /></span>
                <h1 className='p-3 m-auto'>Or</h1>
                <span className='w-50 m-auto'><ProgressBar variant="info" now={100} /></span>
                <span ><ProgressBar variant="danger" now={100} /></span>
            </div>

            <h3>Sign in with </h3>
            <Button variant='light' className="google" onClick={googleSignin}>
                <svg height="100%" viewBox="0 0 20 20" width="50px" fit="" preserveAspectRatio="xMidYMid meet" focusable="false"><path d="M19.6 10.23c0-.82-.1-1.42-.25-2.05H10v3.72h5.5c-.15.96-.74 2.31-2.04 3.22v2.45h3.16c1.89-1.73 2.98-4.3 2.98-7.34z" fill="#4285F4"></path><path d="M13.46 15.13c-.83.59-1.96 1-3.46 1-2.64 0-4.88-1.74-5.68-4.15H1.07v2.52C2.72 17.75 6.09 20 10 20c2.7 0 4.96-.89 6.62-2.42l-3.16-2.45z" fill="#34A853"></path><path d="M3.99 10c0-.69.12-1.35.32-1.97V5.51H1.07A9.973 9.973 0 000 10c0 1.61.39 3.14 1.07 4.49l3.24-2.52c-.2-.62-.32-1.28-.32-1.97z" fill="#FBBC05"></path><path d="M10 3.88c1.88 0 3.13.81 3.85 1.48l2.84-2.76C14.96.99 12.7 0 10 0 6.09 0 2.72 2.25 1.07 5.51l3.24 2.52C5.12 5.62 7.36 3.88 10 3.88z" fill="#EA4335"></path></svg>
            </Button>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Login;