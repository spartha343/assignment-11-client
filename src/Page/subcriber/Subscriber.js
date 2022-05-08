import axios from 'axios';
import React, { useRef, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

const Subscriber = () => {
    const username = useRef('');
    const user_email = useRef('');
    const [server_Res, serServer_Res] = useState('');
    const handle_subcriber = (e) => {
        e.preventDefault();
        const name = username.current.value;
        const email = user_email.current.value;
        const data = { name, email };
        const url = `http://localhost:5000/subs`;
        axios.post(url, data)
            .then(res => { serServer_Res(res?.statusText); })
            .catch(error => serServer_Res(error))
        e.target.reset();

    }

    if (server_Res) {
        toast('Your email sent')
    }

    return (
        <div className='mt-5 text-center p-5' style={{ backgroundColor: "purple" }}>
            <h3 className='p-3 text-white'>Subscribe To Our Newsletter</h3>
            <form onSubmit={handle_subcriber} className=' w-50 m-auto '>
                <input type="text" ref={username} name="user_name" id="" placeholder='Your name ' required className='form-control' />
                <br />
                <br />
                <input type="email" ref={user_email} name="user_email" id="" placeholder='Your email' required className='form-control' />
                <br /><br />
                <input type="submit" value="Submit" className='btn btn-dark' />
            </form>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Subscriber;