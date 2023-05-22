import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2'

const ShopData = ({toy}) => {
    const{user} = useContext(AuthContext);
    const{_id, name, img, seller, email, price, rating, quantity, select, description} = toy;
    return (
        <div className="card w-96  mt-16 mb-12 bg-base-100 shadow-xl border-2 border-red-600">
            <figure className="px-10 pt-10 w-96 h-60">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p><strong className='mr-2'>Price:</strong>{price}</p>
                <p><strong className='mr-2'>Rating:</strong>{rating}</p>
                <div className="card-actions">
                    <Link to={user? `toy/${_id}` : 
                    Swal.fire('At first do Log in.') && '/login'
                }><button   className="btn  bg-primary px-2 py-2 text-white">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ShopData;