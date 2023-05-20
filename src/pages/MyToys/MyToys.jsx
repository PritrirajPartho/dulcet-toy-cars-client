import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import MyToysRow from '../MyToys/MyToysRow';
import Swal from 'sweetalert2';

const MyToys = () => {
    const{user} = useContext(AuthContext);
    const[mytoys, setMytoys] = useState([]);
    // const [retoys, setRetoys] = useState(mytoys);
   
    const url = `https://toy-marketplace-server-sepia.vercel.app/mytoys?email=${user?.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMytoys(data))
    }, [url]);
   console.log(mytoys)

    // delet action is here........
    const handleDelete = id => {
        console.log(id)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
                if (result.isConfirmed) { 
                    fetch(`https://toy-marketplace-server-sepia.vercel.app/toys/${id}`,{
                        method: 'DELETE',  
                      })
                      .then(res => res.json())
                      .then(data =>{
                            console.log(data);
                            if (data.deletedCount > 0) {
                                Swal.fire(
                                    'Deleted!',
                                    'Your Toy has been deleted.',
                                    'success'
                                ) 
                                const remaining = mytoys.filter(toy => toy._id !== id);
                                setMytoys(remaining);
                            }
                      })            
                }
          })
    }

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
                            handleDelete={handleDelete}
                          ></MyToysRow>)
                       }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToys;