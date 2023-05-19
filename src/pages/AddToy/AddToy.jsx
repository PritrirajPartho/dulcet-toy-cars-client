import React, { useContext, useState } from 'react';
import Select from 'react-select';
import { AuthContext } from '../../AuthProvider/AuthProvider';


const AddToy = () => {
    const{user} = useContext(AuthContext);
    const [selectedOption, setSelectedOption] = useState(null);
    const options = [
        { value: 'sports-car', label: 'sports-car' },
        { value: 'truck', label: 'truck' },
        { value: 'regular-car', label: 'regular-car' },
      ];
    //-------------------------------------------------------------
    const handleAddToy = (event) =>{
        event.preventDefault();
        const form = event.target;
        const select = form.select.value;
        console.log(select)
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
                            <input type="text" name='rating' placeholder='Product rating' className="input input-bordered" />
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
                        <textarea placeholder="description is here" className="textarea textarea-bordered textarea-lg w-full max-w-xs " ></textarea>
                </div>
                <div className="form-control mt-8 ms-4 mr-4">
                    <input className="btn btn-primary btn-block" type="submit" value="Add A Toy" />
                </div>
            </form>
            <div className="card-body">

            </div>
        </div>
    );
};

export default AddToy;