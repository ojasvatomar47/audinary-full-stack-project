import React from 'react';
import { FiHome, FiSearch, FiBell, FiUser } from 'react-icons/fi';

const TabBar = () => {
  return (
    <div className="fixed bottom-0 bg-gradient-to-r from-[#36454F] via-[#464646] to-[#626262] p-2 w-full flex justify-around items-center text-white z-10 h-14">
      <FiHome />
      <FiSearch />
      <FiBell />
      <FiUser />
    </div>
  );
};

export default TabBar;
