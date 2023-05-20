import React from 'react';
import { Link } from 'react-router-dom';

const MyToysRow = ({mytoy}) => {
    const{_id, name, img, seller, email, price, rating, quantity, category, description} = mytoy;

    return (
     <tr className='text-center'>
            <td>{name}</td>
            <td>{category}</td>   
            <td>${price}</td>
            <td>{quantity}</td>
            <td>
                <button  className="btn border-0  bg-red-500 px-4 py-1 text-white">Delete</button>
            </td>
            <td>
                <Link to={`/update/${_id}`}><button  className="btn border-0  bg-primary px-4 py-1 text-white">Update</button></Link>
            </td>
     </tr>
    );
};

export default MyToysRow;