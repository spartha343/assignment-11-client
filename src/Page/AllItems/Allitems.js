import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useGetProductdata from '../../hooks/useGetProductdata';
import Item from '../Item/Item';

const Allitems = () => {
    const [products, setproducts] = useGetProductdata();
    return (
        <div className='pageHeight'>
            {
                products.map(item => <Item key={item._id} item={item}></Item>)
            }
            <Link to={'/addItem'}>
                <Button variant="dark"> Add Item</Button>
            </Link>
        </div>
    );
};

export default Allitems;