'use client';
import React, { useState } from 'react';
import { FaUser, FaBell, FaCog, FaHeart, FaBars, FaTimes } from 'react-icons/fa';
import Image from 'next/image';

const Navbar = ({ onHamburgerClick }: { onHamburgerClick: () => void }) => {
  return (
    <nav className="bg-white w-full h-[124px] pt-4 border-b" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
      <div className="max-w-7xl mx-auto">
        <div className="hidden sm:flex items-center justify-between pt-4">
          <div className="flex items-center space-x-4">
            <div onClick={onHamburgerClick} className="cursor-pointer p-2 sm:hidden">
              <FaBars size={24} color="#3563E9" />
            </div>
            <div className="text-2xl font-bold text-[32px] leading-[48px] tracking-[-3%]" style={{ color: '#3563E9' }}>
              MORENT
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative flex items-center w-[492px] h-11 rounded-full border border-gray-300 right-32">
            <div className="absolute left-4">
              <Image src="/searchicon.png" alt="Search Icon" width={24} height={24} />
            </div>
            <input
              type="text"
              placeholder="Search something here"
              className="w-full px-4 py-2 pl-12 pr-12 rounded-full text-gray-800 placeholder-gray-500"
            />
            <div className="absolute right-4">
              <Image src="/filter.png" alt="Filter Icon" width={24} height={24} />
            </div>
          </div>

          {/* Right-side Icons */}
          <div className="flex items-center space-x-4">
            <div className="bg-white p-2 h-8 w-8 rounded-full border border-gray-300 text-gray-600 cursor-pointer">
              <FaHeart />
            </div>
            <div className="bg-white p-2 h-8 w-8 rounded-full border border-gray-300 text-gray-600 cursor-pointer">
              <FaBell />
            </div>
            <div className="bg-white p-2 h-8 w-8 rounded-full border border-gray-300 text-gray-600 cursor-pointer">
              <FaCog />
            </div>
            <div className="bg-white p-2 h-8 w-8 rounded-full border border-gray-300 text-gray-600 cursor-pointer">
              <FaUser />
            </div>
          </div>
        </div>

        <div className="sm:hidden flex flex-col items-center">
          <div className="w-full flex justify-between px-4">
            <div className="flex items-center space-x-4">
              <div onClick={onHamburgerClick} className="cursor-pointer p-2">
                <FaBars size={24} color="#3563E9" />
              </div>
              <div className="text-2xl font-bold text-[32px] tracking-[-3%]" style={{ color: '#3563E9' }}>
                MORENT
              </div>
            </div>
            <div className="bg-white p-2 h-8 w-8 rounded-full border border-gray-300 text-gray-600 cursor-pointer">
              <FaUser />
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative flex items-center w-[85%] max-w-[492px] h-12 rounded-full border border-gray-300 mt-4">
            <div className="absolute left-4">
              <Image src="/searchicon.png" alt="Search Icon" width={24} height={24} />
            </div>
            <input
              type="text"
              placeholder="Search something here"
              className="w-full px-4 py-2 pl-12 pr-12 rounded-full text-gray-800 placeholder-gray-500"
            />
            <div className="absolute right-4">
              <Image src="/filter.png" alt="Filter Icon" width={24} height={24} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;