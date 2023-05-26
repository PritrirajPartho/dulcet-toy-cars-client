import React, { useContext } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Tooltip } from 'react-tooltip';

const Header = () => {
    const { logOut, user } = useContext(AuthContext);
    return (
        <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                <Link className='text-xl ms-7 mt-4' to={'/'}>Home</Link>
                <Link className='text-xl ms-7 mt-4' to={'/alltoys'}>All-Toys</Link>
                <Link className='text-xl ms-7 mt-4' to={'/blogs'}>Blogs</Link>
                <Link className='text-xl ms-7 mt-4' to={'/registration'}>Registration</Link>

                {
                      user?
                      <>
                         <Link className='text-xl ms-7 mt-4' to={'/mytoys'}>My-Toys</Link>
                         <Link className='text-xl ms-7 mt-4' to={'/addtoy'}>Add Toy</Link>
                         <div className="avatar">
                            <div className="ms-6 mt-3  w-14 rounded-full profile-component" data-tooltip-id="my-tooltip" data-tooltip-content={user.displayName}>
                                <img src={user?.photoURL} />
                                <Tooltip id="my-tooltip" />
                            </div>
                        </div>
                         <button className="btn btn-primary ms-2 mt-4 mr-1 mb-4" onClick={logOut}>SignOut</button>                      </>
                      :
                      <>
                        <Link className='text-xl ms-7 mr-12 mt-4' to={'/login'}>Log in</Link> 
                      </>
                }
            </ul>
          </div>
             <h1 className=" normal-case text-xl font-bold ms-5 ">Dulcet-Toy-Cars</h1> 
          </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 mb-4">
                <Link className='text-xl ms-10 mt-6 font-bold' to={'/'}>Home</Link>
                <Link className='text-xl ms-10 mt-6 font-bold' to={'/alltoys'}>All-Toys</Link>
                <Link className='text-xl ms-10 mt-6 font-bold' to={'/blogs'}>Blogs</Link>
                <Link className='text-xl ms-10 mt-6 font-bold' to={'/registration'}>Registration</Link>

                {
                      user?
                        <>
                            <Link className='text-xl ms-7 mt-6 font-bold' to={'/addtoy'}>Add Toy</Link>
                            <Link className='text-xl ms-7 mt-6 font-bold' to={'/mytoys'}>My-Toys</Link>
                            <div className="avatar">
                                <div className="ms-6 mt-3 w-14 rounded-full profile-component" data-tooltip-id="my-tooltip" data-tooltip-content={user.displayName}>
                                    <img src={user?.photoURL} />
                                    <Tooltip id="my-tooltip" />
                                </div>
                            </div>
                            <button className="btn btn-primary ms-12 mr-8 mt-4" onClick={logOut}>SignOut</button> 
                        </>
                      :
                        <>
                            <Link className='text-xl ms-7 mr-12 mt-6 font-bold' to={'/login'}>Log in</Link> 
                        </>
                }
          </ul>
        </div>
      </div>
    );
};

export default Header;