import React, { useContext } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Header = () => {
    const { logOut, user } = useContext(AuthContext);
    return (
       <nav>
            <div className="navbar">
                <div className="flex-none">
                    <button className="btn btn-square btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </button>
                </div>
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl">Dulcet-Toy-Cars</a>
                </div>
                <div>
                <Link className='text-xl ms-7' to={'/'}>Home</Link>
                <Link className='text-xl ms-7' to={'/alltoys'}>All-Toys</Link>
                <Link className='text-xl ms-7' to={'/blogs'}>Blogs</Link>
                <Link className='text-xl ms-7' to={'/registration'}>Registration</Link>
                    {
                      user?
                      <>
                         <Link className='text-xl ms-7' to={'/mytoys'}>My-Toys</Link>
                         <Link className='text-xl ms-7' to={'/addtoy'}>Add Toy</Link>
                         <div className="avatar">
                            <div className="w-24 rounded-full">
                                <img src={user?.photoURL} />
                            </div>
                        </div>
                         <button className="btn btn-primary ms-16 mr-8" onClick={logOut}>SignOut</button>                      </>
                      :
                      <>
                        <Link className='text-xl ms-7 mr-12' to={'/login'}>Log in</Link> 
                      </>
                    }
                </div>
            </div>
       </nav>
    );
};

export default Header;