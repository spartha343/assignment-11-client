import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';

const RequirAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const locaion = useLocation();
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);

    if (loading) {
        return toast('Please wait a moment');
    }

    if (!user) {
        return <Navigate to={'/login'} state={{ from: locaion }} replace></Navigate>;
    }
    if (user.providerData[0].providerId === 'password' && !user.emailVerified) {
        return <div className='text-center mt-5 pageHeight'>
            <h3 className='text-danger'>Your Email is not verified!!</h3>
            <h5 className='text-success'> Please Verify your email address</h5>
            <button
                className='btn btn-primary'
                onClick={async () => {
                    await sendEmailVerification();
                    toast('Sent email');
                }}
            >
                Send Verification Email Again
            </button>
            <ToastContainer></ToastContainer>
        </div>
    }
    return children;
};

export default RequirAuth;