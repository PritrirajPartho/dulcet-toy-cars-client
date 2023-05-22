import React from 'react';

const Blogs = () => {
    return (
        <div className='m-20 '>
            <h1 className='text-purple-400 text-3xl mt-5'>1. What is an access token and refresh token? How do they work and where should we store them on the client-side?</h1>
            <p className='text-xl'>Ans:  Tokens are pieces of data that carry just enough information to facilitate the process of determining a user's identity or authorizing a user to perform an action. All in all, tokens are artifacts that allow application systems to perform the authorization and authentication process.</p>
            <h1 className='text-purple-400 text-3xl mt-5'>2.Compare SQL and NoSQL databases?</h1>
            <p className='text-xl'>Ans:  SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. </p>
            <h1 className='text-purple-400 text-3xl mt-5'>3.What is express js? What is Nest JS?</h1>
            <p className='text-xl'>Ans:  NestJS provides a more structured and opinionated approach, which can make it easier to build complex APIs with proper separation of concerns. Express, on the other hand, is more lightweight and flexible, which makes it a popular choice for simple or small-scale APIs. </p>
            <h1 className='text-purple-400 text-3xl mt-5'>4.What is MongoDB aggregate and how does it work? </h1>
            <p className='text-xl'>Ans:  In MongoDB, aggregation operations process the data records/documents and return computed results. It collects values from various documents and groups them together and then performs different types of operations on that grouped data like sum, average, minimum, maximum, etc to return a computed result. It is similar to the aggregate function of SQL </p>
        </div>
    );
};

export default Blogs;