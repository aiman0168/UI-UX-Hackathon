'use client';
import React from 'react';
import Image from 'next/image';
import Sidebar from '../Components/Sidebar';
import Recent from '../Components/Recent';

const RecentCar = () => {
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const halfStars = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStars;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={`full-${i}`} className="text-yellow-400">★</span>);
    }
    if (halfStars) {
      stars.push(<span key="half" className="text-yellow-400">☆</span>);
    }
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<span key={`empty-${i}`} className="text-gray-300">★</span>);
    }

    return stars;
  };

  return (
    <div className="flex flex-col md:flex-row overflow-hidden" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
      <Sidebar />
      <div className="flex flex-col p-6 w-full bg-gray-100 md:ml-[360px]">
        <div className="flex flex-col sm:flex-row justify-between gap-6">
          <div className="w-full sm:w-[492px] h-[360px] text-white bg-[#3563E9] p-6 rounded-lg">
            <span className="block text-3xl font-semibold">Sports car with the best</span>
            <span className="block text-3xl font-semibold">design and acceleration</span>
            <p className="text-white mt-6">Safety and comfort while driving<br />
              futuristic and elegant sports car</p>
            <div className="ml-8 mt-12">
              <Image src="/hero2.png" alt="Image 1" width={380} height={120} />
            </div>

            <div className="hidden sm:block md:block">
              <div className="flex space-x-4 justify-center sm:justify-start mt-10">
                <div className="w-[148px] h-[120px] bg-[#3563E9] rounded-lg">
                  <Image src="/hero2.png" alt="Car 1" width={116} height={36} className='ml-4 mt-12' />
                </div>
                <div className="w-[148px] h-[128px]">
                  <Image src="/view1.png" alt="Car 2" width={148} height={128} />
                </div>
                <div className="w-[148px] h-[128px]">
                  <Image src="/view2.png" alt="Car 3" width={148} height={128} />
                </div>
              </div>
            </div>
          </div>

          {/* Box 2 */}
          <div className="w-full sm:w-[492px] h-[508px] bg-white p-6 rounded-lg shadow-lg">
            <div className="flex flex-col h-full">
              <div>
                <h2 className="text-3xl font-semibold text-black">
                  Nissan GT-R
                </h2>
                <div className="flex items-center mt-2 text-gray-500">
                  {renderStars(4.8)}
                </div>
              </div>

              <p className="text-gray-500 mt-4">
                NISMO has become the embodiment of Nissan&apos;s<br />
                outstanding performance, inspired by the most<br />
                unforgiving proving ground, the &quot;race track&quot;.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-6">
                <div>
                  <h3 className='text-gray-500'>Type</h3>
                  <p className='text-gray-600'>Sport</p>
                </div>
                <div>
                  <h3 className='text-gray-500'>Steering</h3>
                  <p className='text-gray-600'>Manual</p>
                </div>
                <div>
                  <h3 className='text-gray-500'>Capacity</h3>
                  <p className='text-gray-600'>2 Person</p>
                </div>
                <div>
                  <h3 className='text-gray-500'>Gasoline</h3>
                  <p className='text-gray-600'>70L</p>
                </div>
              </div>

              <div className="flex items-center justify-between mt-16">
                <p className="text-xl text-black font-semibold">$80.00<p className='text-gray-400'>/days</p></p>
                <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
                  Rent Now
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Review Section */}
        <div className="flex flex-col p-6 w-full bg-white mt-8">
          <div className="flex flex-row gap-4">
            <h2 className="text-2xl font-semibold text-black mb-6">Reviews</h2>
            <div className="bg-blue-600 w-11 h-7 rounded-md text-white flex items-center justify-center">
              <p className="mt-1 ml-3">13</p>
            </div>
          </div>

          <div className="p-6">
            <div className="flex items-center space-x-4">
              <Image src='/Profill.png' alt='profilepic' width={56} height={56} />
              <div>
                <p className="font-semibold">Alex Stanton</p>
                <p className="text-gray-500">CEO at Bukalapak</p>
                <div className="flex space-x-1">
                  <span className="text-yellow-400">★</span>
                  <span className="text-yellow-400">★</span>
                  <span className="text-yellow-400">★</span>
                  <span className="text-yellow-400">★</span>
                  <span className="text-gray-300">★</span>
                </div>
              </div>
            </div>
            <p className="text-gray-400 mt-4 text-sm">
              We are very happy with the service from the MORENT App. Morent has a low price and also a variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.
            </p>
          </div>
          <div className="p-6 mb-6">
            <div className="flex items-center space-x-4">
              <Image src='/Profill2.png' alt='profilepic' width={56} height={56} />
              <div>
                <p className="font-semibold">Skylar Dias</p>
                <p className="text-gray-500">CEO at Amazon</p>
                <div className="flex space-x-1">
                  <span className="text-yellow-400">★</span>
                  <span className="text-yellow-400">★</span>
                  <span className="text-yellow-400">★</span>
                  <span className="text-yellow-400">★</span>
                  <span className="text-gray-300">★</span>
                </div>
              </div>
            </div>
            <p className="text-gray-400 mt-4 text-sm">
              We are greatly helped by the services of the MORENT Application. MORENT has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.
            </p>
          </div>
        </div>

        {/* Recent Section */}
        <div className="mt-8">
          <Recent />
        </div>
      </div>
    </div>
  );
};

export default RecentCar;
