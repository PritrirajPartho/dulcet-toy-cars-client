import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ToyDetails = () => {
    const toy = useLoaderData();
    const{_id, name, img, seller, email, price, rating, quantity, category, description} = toy;
    return (
        <div className='ms-24 mb-16 mt-16'>
            <img src={img} className='w-96 rounded-lg  mt-10 mb-8 border-red-600 border-x-2 border-y-2' />
            <div>
                <h1 className='text-3xl font-bold text-primary'>{name}</h1>
                <p className='text-xl mt-4'><strong className='mr-5'>Seller:</strong>{seller}</p>
                <p className='text-xl mt-4'><strong className='mr-5'>Email:</strong>{email}</p>
                <p className='text-xl mt-4'><strong className='mr-5'>Price:</strong>{price}</p>
                <p className='text-xl mt-4'><strong className='mr-5'>Rating:</strong>5 out of   {rating}</p>
                <p className='text-xl mt-4'><strong className='mr-5'>Available Quantity:</strong>{quantity}</p>
                <p className='text-xl mt-4'><strong className='mr-5'>Description:</strong>{description}</p>
            </div>
        </div>
    );
};

export default ToyDetails;