import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import { FiHome, FiSearch, FiBell, FiUser } from 'react-icons/fi';
import { AuthContext } from '../context/authContext'

const NavBar = () => {

  const { currentUser, logout } = useContext(AuthContext)

  return (
    <nav className="hidden md:block bg-gradient-to-r from-grad1 to-grad3 p-4 text-primary fixed w-full z-10 top-0">
      <div className="flex justify-between items-center">
        <div className="text-3xl font-semibold flex-1 audinary">
          <Link to="/">
            audinary
          </Link>
        </div>
        <div className="space-x-4 flex-[2]">
          <ul className='flex justify-evenly items-center gap-1'>
            <li className='drop-shadow-lg text-xl hover:text-buttonhover'>
              <Link to="/">Home</Link>
            </li>
            <li className='drop-shadow-lg text-xl hover:text-buttonhover'>
              <Link to="/authors">Authors</Link>
            </li>
            <li className='drop-shadow-lg text-xl hover:text-buttonhover'>
              <Link to="/profile">Profile</Link>
            </li>
            <li className='drop-shadow-lg text-xl hover:text-buttonhover'>
              <Link to="/about">About Us</Link>
            </li>
          </ul>
        </div>
        <div className='flex justify-center items-center gap-8'>
          <h1 className='text-2xl text-secondary audinary bg-primary px-3 rounded-xl'>{currentUser?.username}</h1>
          <button className='flex hover:bg-buttonhover justify-center text-white items-center cursor-pointer bg-primary p-2 rounded-md'>
            {currentUser ? <span onClick={logout}>LogOut</span> : <Link to="/login">LogIn</Link>}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
