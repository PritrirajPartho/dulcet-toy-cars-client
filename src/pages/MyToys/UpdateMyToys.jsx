import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2'

const UpdateMyToys = () => {
     
    const toy = useLoaderData();
    const{_id} = toy;


    const handleUpdate = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
        const updateToy = {
            name:name,
            price:price,
            quantity: quantity,
            description:description
        }
        // --------------------------------------------
        fetch(`https://toy-marketplace-server-sepia.vercel.app/toys/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                        Swal.fire('This Toy Updated Successfully');
                        form.reset();
                }
            })
    }

    return(
    <div>
        <h2 className='text-center text-purple-700  text-3xl mt-5 mb-8'>Update Your Toy here....</h2>
        <form onSubmit={handleUpdate}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ms-12 mr-12">
                    <div className="form-control">
                        <label className="label font-bold text-3xl">
                            <span className="label-text ">Name</span>
                        </label>
                        <input type="text" placeholder='Update Product name' name="name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label font-bold text-3xl">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" name='price' placeholder='Update Product price' className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label font-bold text-3xl">
                        <span className="label-text">Available Quantity</span>
                        </label>
                        <input type="text" name='quantity' placeholder='Update Product quantity' className="input input-bordered" />
                    </div>
            </div>
            <div className="form-control ms-12 mt-3">
                    <label className="label font-bold text-3xl">
                        <span className="label-text">Description</span>
                    </label>
                    <textarea name='description' placeholder="Update description" className="textarea textarea-bordered textarea-lg w-full max-w-xs " ></textarea>
            </div>
            <div className="form-control mt-10 ms-12 mr-12 mb-10">
                <input  className="btn btn-primary btn-block" type="submit" value="Update Toy" />
            </div>
        </form>
    </div>
   );
};

export default UpdateMyToys;