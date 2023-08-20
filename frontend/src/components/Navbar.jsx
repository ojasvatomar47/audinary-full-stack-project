import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom'
import { FiHome, FiSearch, FiBell, FiUser } from 'react-icons/fi';
import { AuthContext } from '../context/authContext'

const NavBar = () => {

  const { currentUser, logout } = useContext(AuthContext)

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

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
            <div>
              <li className='drop-shadow-lg text-xl hover:text-buttonhover'>
                <Link to="/">Home</Link>
              </li>
            </div>
            <div className='relative'>
              <li className='drop-shadow-lg text-xl hover:text-buttonhover' onClick={toggleDropdown}>
                <Link>Genres</Link>
              </li>
              {isDropdownOpen && (
                <ul className="absolute left-0 mt-2 bg-primary rounded-lg shadow-lg">
                  <li className="px-4 py-2 text-white hover:bg-buttonhover" onClick={toggleDropdown}>
                    <Link to="/?genre=Fantasy">Fantasy</Link>
                  </li>
                  <li className="px-4 py-2 text-white hover:bg-buttonhover" onClick={toggleDropdown}>
                    <Link to="/?genre=Drama">Drama</Link>
                  </li>
                  <li className="px-4 py-2 text-white hover:bg-buttonhover" onClick={toggleDropdown}>
                    <Link to="/?genre=Scifi">Sci-Fi</Link>
                  </li>
                  <li className="px-4 py-2 text-white hover:bg-buttonhover" onClick={toggleDropdown}>
                    <Link to="/?genre=Thriller">Thriller</Link>
                  </li>
                </ul>
              )}
            </div>
            <div>
              <li className='drop-shadow-lg text-xl hover:text-buttonhover'>
                <Link to="/profile">Profile</Link>
              </li>
            </div>
            <div>
              <li className='drop-shadow-lg text-xl hover:text-buttonhover'>
                <Link to="/about">About Us</Link>
              </li>
            </div>
          </ul>
        </div>
        <div className='flex justify-center items-center gap-8'>
          <h1 className='text-2xl text-secondary audinary bg-primary px-3 rounded-xl'>{currentUser?.username}</h1>
          <button className='flex hover:bg-buttonhover justify-center text-white items-center cursor-pointer bg-primary px-6 transition duration-200 ease-in-out py-2 text-lg rounded-md'>
            {currentUser ? <span onClick={logout}>LogOut</span> : <Link to="/login">LogIn</Link>}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
