import React from 'react';

const UpdateMyToys = () => {
    return(
    <div>
        <h2 className='text-center text-purple-700  text-3xl mt-5 mb-8'>Update Your Toy here....</h2>
        <form >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ms-12 mr-12">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder='Update Product name' name="name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" name='price' placeholder='Update Product price' className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                        <span className="label-text">Available Quantity</span>
                        </label>
                        <input type="text" name='quantity' placeholder='Update Product quantity' className="input input-bordered" />
                    </div>
            </div>
            <div className="form-control ms-4 mt-3">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <textarea name='description' placeholder="Update description" className="textarea textarea-bordered textarea-lg w-full max-w-xs " ></textarea>
            </div>
            <div className="form-control mt-8 ms-12 mr-12">
                <input className="btn btn-primary btn-block" type="submit" value="Update Toy" />
            </div>
        </form>
    </div>
   );
};

export default UpdateMyToys;