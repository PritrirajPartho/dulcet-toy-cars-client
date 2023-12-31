import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import MyToysRow from '../MyToys/MyToysRow';
import Swal from 'sweetalert2';


const MyToys = () => {
    const{user} = useContext(AuthContext);
    const[mytoys, setMytoys] = useState([]);
    const[asc, setAsc] = useState(true);
    console.log(asc)
    // sorting system
   
    const url = `https://toy-marketplace-server-sepia.vercel.app/mytoys?email=${user?.email}&sort=${asc?'asc': 'dsc'}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMytoys(data))
    }, [asc]);

    useEffect(() => {
        document.title = 'Dulcet-Toy-Cars | My-toys'
    },[])
   
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
            <h2 className="text-4xl text-blue-600 text-center mt-8 mb-8">Your Added Toys</h2>
                <div className='flex justify-center mt-4 mb-10'>
                {/* <select onChange={(e) => setAsc(e.target.value)} className="select select-error w-full max-w-xs">
                    <option disabled selected>Sort By</option>
                    <option value='dsc'>descending </option>
                    <option value='asc'>ascending</option>
              </select> */}
              <button className="btn btn-primary mt-5" onClick={() => setAsc(!asc)}>
                   {asc ? "Price  high to Low" : "Price  Low to high"}
              </button>
                </div>
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