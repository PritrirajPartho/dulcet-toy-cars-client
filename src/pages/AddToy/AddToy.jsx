import React, { useContext, useState } from 'react';
import Select from 'react-select';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2'


const AddToy = () => {
    const{user} = useContext(AuthContext);
    const [selectedOption, setSelectedOption] = useState(null);
    const options = [
        { value: 'bus', label: 'bus' },
        { value: 'truck', label: 'truck' },
        { value: 'regular-car', label: 'regular-car' },
      ];
    //-------------------------------------------------------------
    const handleAddToy = (event) =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const seller = form.seller.value;
        const email = form.email.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const select = form.select.value;
        const description = form.description.value;
        console.log(name, photo, seller, email, price, rating, quantity, select, description)
        console.log(photo)
        const toy = {
            name: name, 
            img: photo, 
            seller: seller,
            email: email, 
            price: price,
            rating: rating,
            quantity: quantity,
            category: select,
            description: description
        }
        // =============================================================
        fetch('https://toy-marketplace-server-sepia.vercel.app/toys', {
            method: 'POST', 
            headers: {
                'content-type': 'application/json'
            }, 
            body: JSON.stringify(toy)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire('This Toy added Successfully');
                form.reset();
            }
        })
    }

    return (
        <div>
            <h2 className='text-center text-purple-700  text-3xl mt-5 mb-8'>Add a Toy here....</h2>
            <form onSubmit={handleAddToy}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ms-4 mr-4">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder='Enter Product name' name="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" placeholder='Photo url' name="photo" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Seller Name</span>
                            </label>
                            <input type="text" name="seller" defaultValue={user?.displayName} className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name="email" defaultValue={user?.email} placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Product Price</span>
                            </label>
                            <input type="text" name='price' placeholder='Product price' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <input type="text" name='rating' placeholder='like as 4.5 or etc' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                            <span className="label-text">Available Quantity</span>
                            </label>
                            <input type="text" name='quantity' placeholder='Enter Product available quantity' className="input input-bordered" />
                        </div>
                        <div className="form-control mt-2">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <Select
                            name='select'
                                defaultValue={selectedOption}
                                onChange={setSelectedOption}
                                options={options}
                            />
                        </div>
                </div>
                <div className="form-control ms-4 mt-3">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <textarea name='description' placeholder="description is here" className="textarea textarea-bordered textarea-lg w-full max-w-xs " ></textarea>
                </div>
                <div className="form-control mt-8 ms-4 mr-4">
                    <input className="btn btn-primary btn-block mb-10" type="submit" value="Add A Toy" />
                </div>
            </form>
        </div>
    );
};

export default AddToy;