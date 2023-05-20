import React from 'react';

const MyToysRow = ({mytoy}) => {
    return (
     <tr>
            <th>
                <td>
                    {toy.seller && seller}
                </td>
            </th>
            <td>{name}</td>
            <td>{category}</td>
            <td>${price}</td>
            <td>{quantity}</td>
            <th>
                <button  className="btn btn-ghost  bg-red-500 px-2 py-2 text-white">Delete</button>
            </th>
            <th>
                <button  className="btn btn-ghost  bg-primary px-2 py-2 text-white">Update</button>
            </th>
     </tr>
    );
};

export default MyToysRow;