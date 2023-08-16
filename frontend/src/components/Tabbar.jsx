import React from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { MdAccountCircle } from 'react-icons/md';
import { HiOutlineInformationCircle } from 'react-icons/hi';
import { FaBook } from 'react-icons/fa';
import { Link } from 'react-router-dom'

const TabBar = () => {
  const iconSize = 24;
  return (
    <div>
      <div className='top-0 bg-gradient-to-r from-grad1 via-grad2 to-grad3 h-14 w-full p-4 flex items-center justify-between'>
        <div className="text-xl font-semibold flex-1 text-deepgold">
          <Link to="/">
            audinary
          </Link>
        </div>
        <div className='flex justify-center items-center cursor-pointer bg-gradient-to-br from-[#DAA520] to-[#B8860B] p-2 rounded-md'>
          <button className=''>
            LogIn/SignUp
          </button>
        </div>
      </div>
      <div className="fixed bottom-0 bg-gradient-to-r from-[#36454F] via-[#464646] to-[#626262] shadow-black shadow-2xl p-2 w-full flex justify-around items-center text-white z-10 h-14">
        <Link to="/"><AiOutlineHome size={iconSize} /></Link>
        <Link to="/authors"><FaBook size={iconSize} /></Link>
        <Link to="/profile"><MdAccountCircle size={iconSize} /></Link>
        <Link to="/about"><HiOutlineInformationCircle size={iconSize} /></Link>
      </div>
    </div>
  );
};

export default TabBar;
