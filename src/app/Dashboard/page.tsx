'use client';
import React from 'react';
import Image from 'next/image';

const DashboardPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen relative">
      {/* First Box */}
      <div className="w-full max-w-[534px] h-auto p-6 bg-white rounded-lg mx-auto mt-10">
        <h1 className="text-xl font-semibold text-black">Details Rental</h1>
        <div className="mt-4">
          <Image src="/Maps.png" alt="Main Image" width={486} height={272} className="w-full" />
        </div>

        <div className="flex items-center justify-between mt-6">
          <div className="w-[132px] h-[72px] bg-[#3563E9] rounded-lg">
            <Image src="/hero2.png" alt="Car 1" width={116} height={36} className="ml-2 mt-6" />
          </div>
          <div className="text-right">
            <p className="font-semibold text-lg">Nissan GT-R</p>
            <p className="text-gray-500">#9761</p>
          </div>
        </div>

        <section className="mx-auto bg-gray-100 mt-6">
          <div className="max-w-xl mx-auto">
            <div className="flex flex-col items-center justify-between space-y-8 sm:space-y-0">
              {/* Pick-Up Section */}
              <div className="bg-white p-6 rounded-lg w-full h-auto flex flex-col justify-between">
                <div className="flex items-center space-x-4">
                  <Image src="/mark.png" alt="icon" width={24} height={24} className="text-black text-3xl" />
                  <h2 className="text-xl font-semibold text-black">Pick-Up</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
                  <div className="flex flex-col border-r pr-4">
                    <h3 className="text-xl font-bold text-black">Locations</h3>
                    <div className="flex items-center space-x-2">
                      <p className="text-gray-500 text-sm mr-4">Select your city</p>
                      <Image src="/arrow-down.png" alt="icon" width={16} height={16} />
                    </div>
                  </div>
                  <div className="flex flex-col border-r pr-4">
                    <h3 className="text-xl font-bold text-black">Date</h3>
                    <div className="flex items-center space-x-2">
                      <p className="text-gray-500 text-sm mr-4">Select your date</p>
                      <Image src="/arrow-down.png" alt="icon" width={16} height={16} />
                    </div>
                  </div>
                  <div className="flex flex-col pr-4">
                    <h3 className="text-xl font-bold text-black">Time</h3>
                    <div className="flex items-center space-x-2">
                      <p className="text-gray-500 text-sm mr-4">Select your time</p>
                      <Image src="/arrow-down.png" alt="icon" width={16} height={16} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Drop-Off Section */}
              <div className="bg-white p-6 rounded-lg w-full h-auto flex flex-col justify-between">
                <div className="flex items-center space-x-4">
                  <Image src="/mark.png" alt="icon" width={24} height={24} className="text-black text-3xl" />
                  <h2 className="text-xl font-semibold text-black">Drop-Off</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
                  <div className="flex flex-col border-r pr-4">
                    <h3 className="text-xl font-bold text-black">Locations</h3>
                    <div className="flex items-center space-x-2">
                      <p className="text-gray-500 text-sm mr-4">Select your city</p>
                      <Image src="/arrow-down.png" alt="icon" width={16} height={16} />
                    </div>
                  </div>
                  <div className="flex flex-col border-r pr-4">
                    <h3 className="text-xl font-bold text-black">Date</h3>
                    <div className="flex items-center space-x-2">
                      <p className="text-gray-500 text-sm mr-4">Select your date</p>
                      <Image src="/arrow-down.png" alt="icon" width={16} height={16} />
                    </div>
                  </div>
                  <div className="flex flex-col pr-4">
                    <h3 className="text-xl font-bold text-black">Time</h3>
                    <div className="flex items-center space-x-2">
                      <p className="text-gray-500 text-sm mr-4">Select your time</p>
                      <Image src="/arrow-down.png" alt="icon" width={16} height={16} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="mt-8">
          <h2 className="text-xl font-semibold text-black">Total Rental Price</h2>
          <p className="text-gray-500 mt-2">Allover price and includes rental discount</p>
        </div>

        <div className="flex justify-between items-center mt-6">
          <p className="text-xl font-semibold text-black">$120.00</p>
        </div>
      </div>

      {/* New Box (Responsive Box on the Right) */}
      <div className="w-full sm:w-[400px] sm:h-[480px] h-auto bg-white rounded-lg p-4 mt-6 sm:mt-0 sm:absolute sm:top-10 sm:right-4">
        <h1 className="text-black text-left text-2xl font-semibold">Recent Transaction</h1>
        <div className="flex items-center justify-between mt-6">
          <div className="w-[132px] h-[72px] bg-white rounded-lg">
            <Image src="/hero2.png" alt="Car 1" width={116} height={36} className="ml-2 mt-6" />
          </div>
          <div className="text-right">
            <p className="font-semibold text-lg">Nissan GT-R</p>
            <p className="text-gray-500">20 July</p>
          </div>
        </div>
        <div className="flex items-center justify-between mt-6">
          <div className="w-[132px] h-[72px] bg-white rounded-lg">
            <Image src="/hero1.png" alt="Car 1" width={116} height={36} className="ml-2 mt-6" />
          </div>
          <div className="text-right">
            <p className="font-semibold text-lg">Koegnigsegg</p>
            <p className="text-gray-500">19 July</p>
          </div>
        </div>
        <div className="flex items-center justify-between mt-6">
          <div className="w-[132px] h-[72px] bg-white rounded-lg">
            <Image src="/car4.png" alt="Car 1" width={116} height={36} className="ml-2 mt-6" />
          </div>
          <div className="text-right">
            <p className="font-semibold text-lg">Rolls-Royce</p>
            <p className="text-gray-500">18 July</p>
          </div>
        </div>
        <div className="flex items-center justify-between mt-6">
          <div className="w-[132px] h-[72px] bg-white rounded-lg">
            <Image src="/Car.png" alt="Car 1" width={116} height={36} className="ml-2 mt-6" />
          </div>
          <div className="text-right">
            <p className="font-semibold text-lg">CR-V</p>
            <p className="text-gray-500">17 July</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
