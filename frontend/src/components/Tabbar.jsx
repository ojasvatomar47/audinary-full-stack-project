import React, { useContext, useState, useEffect } from 'react';
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

  const[navBackground, setNavBackground] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setNavBackground(true);
    } else {
      setNavBackground(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className='md:hidden w-full'>
      <div className='top-0 bg-transparent h-14 w-full flex items-center justify-between absolute'>
        <div className="text-xl md:text-2xl font-semibold flex-1 audinary p-4">
          <Link to="/">
            audinary
          </Link>
        </div>
        <div className='flex justify-center items-center gap-2 md:gap-8 p-2 md:p-4'>
          <h1 className='text-xl md:text-2xl text-secondary audinary bg-secondary px-3 rounded-xl'>{currentUser?.username}</h1>
          <button className='flex hover:bg-buttonhover justify-center text-white items-center cursor-pointer bg-primary px-2 md:px-6 transition duration-200 ease-in-out py-1 md:py-2 rounded-md'>
            {currentUser ? <span onClick={logout}>LogOut</span> : <Link to="/login">LogIn</Link>}
          </button>
        </div>
      </div>
      <div className={`fixed bottom-0 transition duration-300 ${navBackground ? 'bg-grad1' : 'bg-transparent'} shadow-black shadow-2xl p-2 w-full flex justify-around items-center text-primary z-10 h-14`}>
        <div>
          <Link to="/" className='hover:text-buttonhover'><AiOutlineHome size={iconSize} /></Link>
        </div>
        <div onClick={toggleDropdown} className='relative'>
          {isDropdownOpen && (
            <ul className="absolute top-[-180px] mt-2 bg-primary rounded-lg shadow-lg">
              <Link to="/?genre=Fantasy" onClick={scrollToTop}>
                <li className="px-4 py-2 text-white hover:bg-buttonhover" onClick={toggleDropdown}>
                  Fantasy
                </li>
              </Link>
              <Link to="/?genre=Drama" onClick={scrollToTop}>
                <li className="px-4 py-2 text-white hover:bg-buttonhover" onClick={toggleDropdown}>
                  Drama
                </li>
              </Link>
              <Link to="/?genre=Scifi" onClick={scrollToTop}>
                <li className="px-4 py-2 text-white hover:bg-buttonhover" onClick={toggleDropdown}>
                  Sci-Fi
                </li>
              </Link>
              <Link to="/?genre=Thriller" onClick={scrollToTop}>
                <li className="px-4 py-2 text-white hover:bg-buttonhover" onClick={toggleDropdown}>
                  Thriller
                </li>
              </Link>
            </ul>
          )}
          <Link className='hover:text-buttonhover'><FaBook size={iconSize} /></Link>
        </div>
        <div>
          <Link to="/profile" className='hover:text-buttonhover' onClick={scrollToTop}><MdAccountCircle size={iconSize} /></Link>
        </div>
        <div>
          <Link to="/about" className='hover:text-buttonhover' onClick={scrollToTop}><HiOutlineInformationCircle size={iconSize} /></Link>
        </div>
      </div>
    </div>
  );
};

export default TabBar;
