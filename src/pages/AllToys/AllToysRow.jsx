import React from 'react';

const AllToysRow = ({toy}) => {
    const{name, img, seller, email, price, rating, quantity, category, description} = toy;
    
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
                <button  className="btn btn-ghost  bg-primary px-2 py-2 text-white">View Details</button>
            </th>
     </tr>
    );
}; 

export default AllToysRow;