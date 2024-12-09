'use client';
import React, { useState } from 'react';
import { FaUser, FaBell, FaCog, FaHeart, FaBars, FaTimes, FaTachometerAlt, FaCar, FaChartLine, FaWallet, FaInbox, FaCalendarAlt, FaCog as FaSettings, FaQuestionCircle, FaMoon, FaSignOutAlt } from 'react-icons/fa'; // Import the close icon
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <nav className="bg-white w-full h-[124px] pt-4 border-b" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
      <div className="max-w-7xl mx-auto">
        <div className="hidden sm:flex items-center justify-between pt-4">
          <div className="flex items-center space-x-4">
            <div onClick={toggleSidebar} className="cursor-pointer p-2">
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
              <div onClick={toggleSidebar} className="cursor-pointer p-2">
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

      {/* Sidebar */}
      <div
        className={`fixed inset-0 z-50 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300`}
      >
        <div className="w-[360px] h-full bg-white p-6 space-y-8">
          <div onClick={toggleSidebar} className="absolute top-4 right-4 cursor-pointer p-2">
            <FaTimes size={24} color="#3563E9" />
          </div>

          {/* Main Menu Section */}
          <div className="mb-6">
            <h4 className="text-xs text-gray-400 mt-6 ml-6 mb-4">MAIN MENU</h4>
            <div className="space-y-4">
              <Link href="../Dashboard">
              <label className="flex items-center space-x-2 cursor-pointer text-gray-400 hover:bg-blue-500 hover:text-white transition-all px-4 py-2 rounded-md">
                <FaTachometerAlt />
                <span>Dashboard</span>
              </label>
                </Link>
              <Link href="../RecentCar">
                <label className="flex items-center space-x-2 cursor-pointer text-gray-400 hover:bg-blue-500 hover:text-white transition-all px-4 py-2 rounded-md mt-4">
                  <FaCar />
                  <span>Car Rent</span>
                </label>
              </Link>
              <label className="flex items-center space-x-2 cursor-pointer text-gray-400 hover:bg-blue-500 hover:text-white transition-all px-4 py-2 rounded-md">
                <FaChartLine />
                <span>Insight</span>
              </label>
              <label className="flex items-center space-x-2 cursor-pointer text-gray-400 hover:bg-blue-500 hover:text-white transition-all px-4 py-2 rounded-md">
                <FaWallet />
                <span>Reimburse</span>
              </label>
              <label className="flex items-center space-x-2 cursor-pointer text-gray-400 hover:bg-blue-500 hover:text-white transition-all px-4 py-2 rounded-md">
                <FaInbox />
                <span>Inbox</span>
              </label>
              <label className="flex items-center space-x-2 cursor-pointer text-gray-400 hover:bg-blue-500 hover:text-white transition-all px-4 py-2 rounded-md">
                <FaCalendarAlt />
                <span>Calendar</span>
              </label>
            </div>
          </div>

          {/* Preferences Section */}
          <div className="mb-6">
            <h4 className="text-xs text-gray-400 mt-6 mb-4 ml-6">PREFERENCES</h4>
            <div className="space-y-4">
              <label className="flex items-center space-x-2 cursor-pointer text-gray-400 hover:bg-blue-500 hover:text-white transition-all px-4 py-2 rounded-md">
                <FaSettings />
                <span>Settings</span>
              </label>
              <label className="flex items-center space-x-2 cursor-pointer text-gray-400 hover:bg-blue-500 hover:text-white transition-all px-4 py-2 rounded-md">
                <FaQuestionCircle />
                <span>Help & Center</span>
              </label>
              <label className="flex items-center space-x-2 cursor-pointer text-gray-400 hover:bg-blue-500 hover:text-white transition-all px-4 py-2 rounded-md">
                <FaMoon />
                <span>Dark Mode</span>
              </label>
            </div>
          </div>

          {/* Log Out */}
          <div className=" mb-6">
            <label className="flex items-center space-x-2 cursor-pointer text-gray-400 hover:bg-blue-500 hover:text-white transition-all px-4 py-2 rounded-md">
              <FaSignOutAlt />
              <span>Log Out</span>
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
