import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { FiHome, FiSearch, FiBell, FiUser } from 'react-icons/fi';
import { AuthContext } from '../context/authContext'

const NavBar = () => {

  const { currentUser, logout } = useContext(AuthContext)

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const [navBackground, setNavBackground] = useState(false);

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
    <nav className={`hidden md:block transition duration-300 ${navBackground ? 'bg-grad1' : 'bg-transparent'} p-4 text-primary fixed w-full z-10 top-0`}>
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
                <span className='cursor-pointer'>Genres</span>
              </li>
              {isDropdownOpen && (
                <ul className="absolute left-0 mt-2 bg-primary rounded-lg shadow-lg">
                  <Link to="/?genre=Fantasy">
                    <li className="px-4 py-2 text-white hover:bg-buttonhover" onClick={toggleDropdown}>
                      Fantasy
                    </li>
                  </Link>
                  <Link to="/?genre=Drama">
                    <li className="px-4 py-2 text-white hover:bg-buttonhover" onClick={toggleDropdown}>
                      Drama
                    </li>
                  </Link>
                  <Link to="/?genre=Scifi">
                    <li className="px-4 py-2 text-white hover:bg-buttonhover" onClick={toggleDropdown}>
                      Sci-Fi
                    </li>
                  </Link>
                  <Link to="/?genre=Thriller">
                    <li className="px-4 py-2 text-white hover:bg-buttonhover" onClick={toggleDropdown}>
                      Thriller
                    </li>
                  </Link>
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
                <Link to="/about" onClick={scrollToTop}>About Us</Link>
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
