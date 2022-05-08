import { useEffect, useState } from 'react';

const useSingleItem = (id) => {

    const [item, setitem]= useState([]);
    useEffect(()=>{
        fetch(`https://boiling-taiga-43544.herokuapp.com/item/${id}`)
        .then(res=>res.json())
        .then(data=>setitem(data))

    },[id])

    return [item, setitem];

};


export default useSingleItem;