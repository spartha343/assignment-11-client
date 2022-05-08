import axios from 'axios';
import { useEffect, useState } from 'react';

const useSubscriberHook = (data) => {
   // const [subscriber, setsubscriber] =useState({});
    const url=`http://localhost:5000/subs`;

   // useEffect(()=>{
        axios.post(url,data)
        .then(res=>{return res})
        .catch(error=>{return error})
    //},[url, data])
    //return [subscriber, setsubscriber]
};

export default [useSubscriberHook];