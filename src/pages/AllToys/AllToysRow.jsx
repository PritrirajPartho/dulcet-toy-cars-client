import React from 'react';
import { Link } from 'react-router-dom';

const AllToysRow = ({toy}) => {
    const{_id, name, img, seller, email, price, rating, quantity, category, description} = toy;
    
    return (
       <tr>
            <td className='font-bold'>
                {toy.seller && seller}
            </td>
            <td>{name}</td>
            <td>{category}</td>
            <td>${price}</td>
            <td>{quantity}</td>
            <th>
                <Link to={`/toy/${_id}`}><button  className="btn  bg-primary px-2 py-2 text-white">View Details</button></Link>
            </th>
     </tr>
    );
}; 

export default AllToysRow;