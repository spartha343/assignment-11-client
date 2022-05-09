import React from 'react';
import { Card } from 'react-bootstrap';

const Blog = () => {
    return (
        <div>
            <Card body className='m-3 p-4'>
                <h1>What is the difference between javascript and node.js</h1>
                <p>js is a programming language on the other hand node js is an interpreter for js program </p>
            </Card>
            <Card body className='m-3 p-4'>
                <h1> When should you use nodejs and when should you use mongodb</h1>
                <p>mongo db is best for large application that doesn't need relational databse. and node js is most used for event-driven servers</p>
            </Card>
            <Card body className='m-3 p-4'>
                <h1>What is the differences between SQL and noSQL databases.</h1>
                <p>SQL databases are table-based. SQL databases are vertically scalable. SQL databases are better for multi-row transactions. NoSQL databases are horizontally scalable.NoSQL databases are document, key-value, graph, or wide-column stores.NoSQL is better for unstructured data like documents or JSON. </p>
            </Card>
            <Card body className='m-3 p-4'>
                <h1>What is the purpose of jwt and how does it work</h1>
                <p> jwt is used for website data sceurity. jwt takes inputs message, sceret, expirey  and makes a hash code and sends the data to user. and the data token is also used to recognize the user again.</p>
            </Card>
        </div>
    );
};

export default Blog;