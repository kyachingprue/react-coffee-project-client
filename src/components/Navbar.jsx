import React, { useContext } from 'react';
import imgLogo from '../assets/images/more/logo1.png'
import { Link, NavLink } from 'react-router-dom';
import AuthContext from '../Provider/AuthContext';

const Navbar = () => {

  const { users, signOutUsers } = useContext(AuthContext);

  const links = <div className='flex items-center justify-center gap-4'>
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/addCoffees">Add To Coffee</NavLink></li>
    <li><NavLink to="/users">Users</NavLink></li>
  </div>

  const handleDeleteUser = () => {
    signOutUsers()
      .then(() => {
        console.log('logout successfully');
      })
      .catch(error => {
        console.log(error.message);
      })
  }
  return (
    <div>
      <div>
        <div className="navbar bg-base-100 shadow-sm">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                {links}
              </ul>
            </div>
            <a className="btn btn-ghost text-2xl">Coffee Store</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              {links}
            </ul>
          </div>
          <div className="navbar-end">
            {
              users ? <div className='flex items-center gap-2'>
                <h3>{users?.displayName}</h3>
                <img className='w-10 h-10 rounded-full' src={users?.photoURL} alt="" />
                <button onClick={handleDeleteUser} className='btn btn-outline'>Sign Out</button>
              </div> :
                <Link to="/login" className="btn btn-outline">Login Now</Link>
            }
          </div>
        </div>
      </div>
      <div
        className="hero"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/KpnKr4Vr/15.jpg)",
        }}
      >
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <div className=" flex justify-center items-center gap-5 text-2xl font-bold">
              <img className='w-10' src={imgLogo} alt="" />
              Espresso Emporium</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;