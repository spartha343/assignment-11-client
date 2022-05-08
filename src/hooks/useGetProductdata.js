import { useEffect, useState } from 'react';

const useGetProductdata = () => {
    const [products, setproducts] = useState([]);
    
    useEffect(()=>{
        fetch('https://boiling-taiga-43544.herokuapp.com/all')
        .then(res=>res.json())
        .then(data=>setproducts(data))
    },[])
    //console.log(products);
    return [products, setproducts];
};

export default useGetProductdata;