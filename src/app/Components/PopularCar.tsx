import React from 'react';
import Image from 'next/image'; // Importing the Image component
import { FaHeart, FaCog, FaUsers, FaGasPump } from 'react-icons/fa';

interface Product {
  image: string;
  name: string;
  description: string;
  numberofpeople: number;
  liters: number;
  price: number;
  oldPrice?: number;
  discount?: number;
  showDiscount?: boolean;
}

const PopularCard: React.FC<Product> = ({ image, name, description, numberofpeople, liters, price, oldPrice, discount, showDiscount }) => {
  return (
    <div className="w-[304px] h-[388px] bg-white rounded-lg relative overflow-hidden" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
      <div className="relative w-full h-[250px] flex items-center justify-center">
        <Image
          src={image}
          alt="Car"
          width={232} // Define the width of the image
          height={72} // Define the height of the image
          className="object-cover rounded-lg mt-16"
        />
        <div className="absolute top-2 right-2 p-2 w-10 h-10 flex items-center justify-center">
          <FaHeart className="text-red-500" />
        </div>
        <div className="absolute top-4 left-4 text-lg font-semibold text-black">{name}</div>
        <div className="absolute top-12 left-4 text-gray-500">{description}</div>
      </div>

      <div className="px-4 mt-4 text-lg text-gray-400 flex justify-between">
        <div className="flex items-center space-x-2">
          <FaGasPump className="text-gray-400" />
          <span>{liters}L</span>
        </div>
        <div className="flex items-center space-x-2">
          <FaCog className="text-gray-400" />
          <span>Manual</span>
        </div>
        <div className="flex items-center space-x-2">
          <FaUsers className="text-gray-400" />
          <span>{numberofpeople} People</span>
        </div>
      </div>

      <div className="px-4 mt-4 flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-lg font-semibold text-black">
            ${price}.00/<span className="text-gray-500 text-sm inline">day</span>
          </span>
          {showDiscount && oldPrice && discount && (
            <span className="text-sm line-through text-gray-500">${oldPrice}</span>
          )}
        </div>

        <button className="bg-blue-600 text-white font-semibold text-sm px-7 py-3 rounded-md hover:bg-blue-700 transition duration-300">
          Rent Now
        </button>
      </div>
    </div>
  );
};

export default PopularCard;
