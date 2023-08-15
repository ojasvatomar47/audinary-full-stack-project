import React from 'react';
import { Link } from 'react-router-dom'
import { FiHome, FiSearch, FiBell, FiUser } from 'react-icons/fi';

const NavBar = () => {
  return (
    <nav className="bg-gradient-to-r from-[#36454F] via-[#464646] to-[#626262] p-4 text-white fixed w-full z-10 top-0">
      <div className="flex justify-between items-center">
        <div className="text-xl font-semibold flex-1">audinary</div>
        <div className="space-x-4 flex-[2]">
          <ul className='flex justify-evenly items-center gap-1'>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/authors">Authors</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
          </ul>
        </div>
        <div className='flex justify-center items-center cursor-pointer bg-gradient-to-br from-[#DAA520] to-[#B8860B] p-2 rounded-md'>
          <button className=''>
            LogIn/SignUp
            </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
