import React, { useContext } from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { MdAccountCircle } from 'react-icons/md';
import { HiOutlineInformationCircle } from 'react-icons/hi';
import { FaBook } from 'react-icons/fa';
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/authContext';

const TabBar = () => {
  const iconSize = 24;

  const { currentUser } = useContext(AuthContext)

  return (
    <div className='md:hidden'>
      <div className='top-0 bg-gradient-to-r from-grad1 to-grad3 h-14 w-full p-4 flex items-center justify-between'>
        <div className="text-2xl font-semibold flex-1 audinary">
          <Link to="/">
            audinary
          </Link>
        </div>
        <div className='flex justify-center items-center gap-8'>
          <h1 className='text-2xl text-secondary audinary bg-primary px-3 rounded-xl'>{currentUser?.username}</h1>
          <button className='flex hover:bg-buttonhover justify-center text-white items-center cursor-pointer bg-primary p-2 rounded-md'>
            {currentUser ? <span>LogOut</span> : <Link to="/login">LogIn</Link>}
          </button>
        </div>
      </div>
      <div className="fixed bottom-0 bg-gradient-to-r from-grad1 to-grad3 shadow-black shadow-2xl p-2 w-full flex justify-around items-center text-primary z-10 h-14">
        <Link to="/" className='hover:text-buttonhover'><AiOutlineHome size={iconSize} /></Link>
        <Link to="/authors" className='hover:text-buttonhover'><FaBook size={iconSize} /></Link>
        <Link to="/profile" className='hover:text-buttonhover'><MdAccountCircle size={iconSize} /></Link>
        <Link to="/about" className='hover:text-buttonhover'><HiOutlineInformationCircle size={iconSize} /></Link>
      </div>
    </div>
  );
};

export default TabBar;
