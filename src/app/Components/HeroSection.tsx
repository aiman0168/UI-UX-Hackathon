import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="pt-16 bg-gray-100" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-blue-400 p-6 rounded-lg flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-semibold text-white">
                <span className="block">The Best Platform</span>
                <span className="block">for Car Rental</span>
              </h2>
              <p className="text-white mt-6">
                Ease of doing a car rental safely and reliably.<br />
                Of course at a low price.
              </p>
            </div>
            <div className="mt-4">
              <button className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
                Rental Car
              </button>
              <div className="ml-40">
                <Image src="/hero1.png" alt="Image 1" width={406} height={116} />
              </div>
            </div>
          </div>

          <div className='hidden sm:block md:block'>
            <div className="bg-blue-600 p-6 rounded-lg flex flex-col justify-between ">
              <div>
                <h2 className="text-3xl font-semibold text-white">
                  <span className="block">Easy Way to Rent a Car</span>
                  <span className="block">at a Low Price</span>
                </h2>
                <p className="text-white mt-6">
                  Providing cheap car rental services and<br />
                  safe and comfortable facilities.
                </p>
              </div>
              <div className="mt-4">
                <button className="mt-4 px-6 py-3 bg-blue-400 text-white rounded-lg hover:bg-blue-700 transition duration-300">
                  Rental Car
                </button>
                <div className="ml-40">
                  <Image src="/hero2.png" alt="Image 2" width={340} height={108} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="py-16 bg-gray-100">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center justify-between space-y-8 sm:space-y-0 sm:space-x-8">
              <div className="bg-white p-6 rounded-lg w-full sm:w-[300px] md:w-[582px] h-auto md:h-[132px] flex flex-col justify-between">
                <div className="flex items-center space-x-4">
                  <Image src='/mark.png' alt='icon' width={24} height={24} className="text-black text-3xl" />
                  <h2 className="text-xl font-semibold text-black">Pick-Up</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
                  <div className="flex flex-col border-r pr-4">
                    <h3 className="text-xl font-bold text-black">Locations</h3>
                    <div className="flex items-center space-x-2">
                      <p className='text-gray-500 text-sm mr-4'>Select your city</p>
                      <Image src='/arrow-down.png' alt='icon' width={16} height={16} />
                    </div>
                  </div>
                  <div className="flex flex-col border-r pr-4">
                    <h3 className="text-xl font-bold text-black">Date</h3>
                    <div className="flex items-center space-x-2">
                      <p className='text-gray-500 text-sm mr-4'>Select your date</p>
                      <Image src='/arrow-down.png' alt='icon' width={16} height={16} />
                    </div>
                  </div>
                  <div className="flex flex-col pr-4">
                    <h3 className="text-xl font-bold text-black">Time</h3>
                    <div className="flex items-center space-x-2">
                      <p className='text-gray-500 text-sm mr-4'>Select your time</p>
                      <Image src='/arrow-down.png' alt='icon' width={16} height={16} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center items-center bg-blue-600 rounded-lg w-[60px] h-[60px]">
                <Image src='/Swap.png' alt='icon' width={30} height={30}/>
              </div>
              <div className="bg-white p-6 rounded-lg w-full sm:w-[300px] md:w-[582px] h-auto md:h-[132px] flex flex-col justify-between">
                <div className="flex items-center space-x-4">
                  <Image src='/mark.png' alt='icon' width={24} height={24} className="text-black text-3xl" />
                  <h2 className="text-xl font-semibold text-black">Drop-Off</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
                  <div className="flex flex-col border-r pr-4">
                    <h3 className="text-xl font-bold text-black">Locations</h3>
                    <div className="flex items-center space-x-2">
                      <p className='text-gray-500 text-sm mr-4'>Select your city</p>
                      <Image src='/arrow-down.png' alt='icon' width={16} height={16} />
                    </div>
                  </div>
                  <div className="flex flex-col border-r pr-4">
                    <h3 className="text-xl font-bold text-black">Date</h3>
                    <div className="flex items-center space-x-2">
                      <p className='text-gray-500 text-sm mr-4'>Select your date</p>
                      <Image src='/arrow-down.png' alt='icon' width={16} height={16} />
                    </div>
                  </div>
                  <div className="flex flex-col pr-4">
                    <h3 className="text-xl font-bold text-black">Time</h3>
                    <div className="flex items-center space-x-2">
                      <p className='text-gray-500 text-sm mr-4'>Select your time</p>
                      <Image src='/arrow-down.png' alt='icon' width={16} height={16} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default HeroSection;