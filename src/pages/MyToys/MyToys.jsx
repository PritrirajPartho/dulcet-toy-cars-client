import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import MyToysRow from '../MyToys/MyToysRow';

const MyToys = () => {
    const{user} = useContext(AuthContext);
    const[mytoys, setMytoys] = useState([]);

    const url = `https://toy-marketplace-server-sepia.vercel.app/mytoys?email=${user?.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMytoys(data))
    }, [url]);


    return (
        <div>
            <h2 className="text-4xl text-blue-600 text-center mt-8 mb-8">Your Added Toys.</h2>
            <div className="overflow-x-auto w-full mb-12">
                <table className="table w-full ">
                    {/* head */}
                    <thead>
                        <tr className='text-center'>
                            <th >Product Name</th>
                            <th >Category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th className='font-bold'>Do you Want Delete</th>
                            <th>Do you Want Update</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                          mytoys.map(mytoy => <MyToysRow
                            key={mytoy._id}  
                            mytoy={mytoy}
                          ></MyToysRow>)
                       }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToys;