import React, { useContext, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Registraion = () => {
    const{user, createUser, updateUserProfile} = useContext(AuthContext);
    const[error, setError] = useState('');

    const handleRegister = event =>{
        event.preventDefault();
        setError('');
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        const photo = form.photo.value
        console.log(email, name, password, photo)

        //error condition is here below....... 
        if(email.length == 0){
            setError('Give your email please!!');
            return;
           }
           else if(password.length == 0){
            setError('Write your password please!');
            return;
           }
           else if(password.length < 6){
            setError('Give at least 6 or more characters word')
            return;
           }
        // function for firebase...............
        createUser(email, password)
        .then(result =>{
            const logedUser = result.user;
            console.log(logedUser)
            updateUserProfile({displayName:name, photoURL:photo})
            form.reset();
        })
        .catch(err =>{
          console.log(err.message)
        })
    }
return (
  <section>
     <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-3xl text-center font-bold">Registration Please!!</h1>
                        <form onSubmit={handleRegister}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="enter name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name='photo' placeholder="photo url" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder=" enter email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" name='password' placeholder="password" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Registration" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
  </section>
    );
};

export default Registraion;