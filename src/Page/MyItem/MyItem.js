import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import UserItm from '../userItm/UserItm';
const MyItem = () => {
    const [products, setproducts] = useState([]);
    const [user]=useAuthState(auth);

    
    useEffect(()=>{
        // fetch('https://boiling-taiga-43544.herokuapp.com/alluseritem')
        // .then(res=>res.json())
        // .then(data=>setproducts(data))

        const getitems= async()=>{
            const email=user.email;
            const url = `https://boiling-taiga-43544.herokuapp.com/alluseritem?email=${email}`;
            console.log(url);
            const {data}= await axios.get(url,{
                headers: {
                    authorization: `Bearer ${localStorage.getItem('access_token')}`
                }
            });
            setproducts(data)
        }
        getitems()
    },[user])
    return (

        <div className='pageHeight'>
            {
                products.map(item => <UserItm key={item._id} item={item}></UserItm>)
            }
            <Link to={`/addMyItem`}>
                <Button variant="dark"> Add My Item</Button>
            </Link>
        </div>
    );

};

export default MyItem;