import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import app from '../../firebase/firebase.config';
import gogle from '../../../public/img/sign-g.png';

const Login = () => {
    const{ signIn} = useContext(AuthContext);
    const GoogleProvider = new GoogleAuthProvider();
    const auth = getAuth(app);
    const[error, setError] = useState('');
// -------------------------------------------------------
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname  || '/';

// --------------------------------------------------------

    const handleLogin = event =>{
        event.preventDefault();
        setError('');
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        // Set Error case............
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

        signIn(email, password)
        .then(result =>{
            setError('');
            const logedUser = result.user;
            console.log(logedUser);
            form.reset();
            navigate(from, {replace: true})
        })
        .catch(err =>{
            setError('wrong password or invalid email...');
            console.log(err.message)
        })
    }
    useEffect(() => {
        document.title = 'Dulcet-Toy-Cars | Login'
    },[])
    // signin with google------------------------------------------
    const handleGogleSignIn = () =>{
        signInWithPopup(auth, GoogleProvider)
        .then((result)=>{
           const logedInUser = result.user;
           console.log(logedInUser);
           navigate(from, {replace: true})
        })
        .catch((error) => {
          console.log(error.message);
        })
     }
    
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                    <h1 className="text-3xl text-center font-bold">Login</h1>
                    <form onSubmit={handleLogin}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" name='password' placeholder="password" className="input input-bordered" />
                        </div>
                        <p className='text-red-600 mt-3'>{error}</p>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Login" />
                        </div>
                    </form>
                    <p className='my-4 text-center'>New on This Website? <Link className='text-orange-600 font-bold' to="/registration">Registration</Link> </p>
                    <div>
                          <button  onClick={handleGogleSignIn}>
                              <img  className="rounded-lg" src={gogle} alt="" />
                            </button>
                    </div>
                </div> 
            </div>
        </div>
    </div>
    );
};

export default Login;