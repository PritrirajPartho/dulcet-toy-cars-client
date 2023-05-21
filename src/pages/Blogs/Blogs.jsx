import React from 'react';

const Blogs = () => {
    return (
        <div className='m-20 '>
            <h1 className='text-purple-400 text-2xl mt-5'>1.Ans:  Tokens are pieces of data that carry just enough information to facilitate the process of determining a user's identity or authorizing a user to perform an action. All in all, tokens are artifacts that allow application systems to perform the authorization and authentication process.</h1>
            <h1 className='text-green-400 text-2xl mt-5'>2.Ans:  SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. </h1>
            <h1 className='text-purple-400 text-2xl mt-5'>3.Ans:  NestJS provides a more structured and opinionated approach, which can make it easier to build complex APIs with proper separation of concerns. Express, on the other hand, is more lightweight and flexible, which makes it a popular choice for simple or small-scale APIs. </h1>
            <h1 className='text-green-400 text-2xl mt-5'>4.Ans:  In MongoDB, aggregation operations process the data records/documents and return computed results. It collects values from various documents and groups them together and then performs different types of operations on that grouped data like sum, average, minimum, maximum, etc to return a computed result. It is similar to the aggregate function of SQL </h1>
        </div>
    );
};

export default Blogs;