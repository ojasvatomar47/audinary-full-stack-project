import React, { useContext, useState } from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { MdAccountCircle } from 'react-icons/md';
import { HiOutlineInformationCircle } from 'react-icons/hi';
import { FaBook } from 'react-icons/fa';
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/authContext';

const TabBar = () => {
  const iconSize = 24;

  const { currentUser, logout } = useContext(AuthContext)

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className='md:hidden w-full'>
      <div className='top-0 bg-gradient-to-r from-grad1 to-grad3 h-14 w-full p-4 flex items-center justify-between absolute'>
        <div className="text-2xl font-semibold flex-1 audinary p-4">
          <Link to="/">
            audinary
          </Link>
        </div>
        <div className='flex justify-center items-center gap-8 p-4'>
          <h1 className='text-2xl text-secondary audinary bg-primary px-3 rounded-xl'>{currentUser?.username}</h1>
          <button className='flex hover:bg-buttonhover justify-center text-white items-center cursor-pointer bg-primary px-6 transition duration-200 ease-in-out py-2 rounded-md'>
            {currentUser ? <span onClick={logout}>LogOut</span> : <Link to="/login">LogIn</Link>}
          </button>
        </div>
      </div>
      <div className="fixed bottom-0 bg-gradient-to-r from-grad1 to-grad3 shadow-black shadow-2xl p-2 w-full flex justify-around items-center text-primary z-10 h-14">
        <div>
          <Link to="/" className='hover:text-buttonhover'><AiOutlineHome size={iconSize} /></Link>
        </div>
        <div onClick={toggleDropdown} className='relative'>
          {isDropdownOpen && (
            <ul className="absolute top-[-180px] mt-2 bg-primary rounded-lg shadow-lg">
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
          <Link className='hover:text-buttonhover'><FaBook size={iconSize} /></Link>
        </div>
        <div>
          <Link to="/profile" className='hover:text-buttonhover'><MdAccountCircle size={iconSize} /></Link>
        </div>
        <div>
          <Link to="/about" className='hover:text-buttonhover'><HiOutlineInformationCircle size={iconSize} /></Link>
        </div>
      </div>
    </div>
  );
};

export default TabBar;
