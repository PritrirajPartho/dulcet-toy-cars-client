import React, { useEffect, useState } from 'react';
import AllToysRow from './AllToysRow';

const AllToys = () => {
    const[toys, setToys] = useState([]);
    useEffect(() =>{
        fetch('http://localhost:5000/toys')
        .then(res => res.json())
        .then(data => setToys(data))
    },[])
    return (
        <div>
            <h2 className="text-5xl text-blue-600 text-center mt-8 mb-5">All Available Toys.</h2>
            <div className="overflow-x-auto w-full mb-12">
                <table className="table w-full ">
                    {/* head */}
                    <thead>
                        <tr>
                            <th >Seller</th>
                            <th>Toy Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        toys.slice(0,20).map(toy => <AllToysRow 
                            key={toy._id}
                            toy={toy}
                        ></AllToysRow>)
                     }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllToys;