import React from 'react';
import { FaHeart, FaCog, FaUsers, FaGasPump } from 'react-icons/fa';
import Image from 'next/image'; // Import Image component

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

const RecommentionCard: React.FC<Product> = ({ image, name, description, numberofpeople, liters, price, oldPrice, discount, showDiscount }) => {
  return (
    <div className="w-full sm:w-[304px] h-[388px] bg-white rounded-lg relative overflow-hidden" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
      <div className="relative w-full h-[250px] flex items-center justify-center">
        {/* Use relative path from the public directory */}
        <Image
          src={image} // e.g., "/car1.png"
          alt="Car"
          width={248} // Specify the width of the image
          height={100} // Specify the height of the image
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

const ProductRow: React.FC = () => {
  const products: Product[] = [
    { image: '/car1.png', name: "All New Rush", description: "SUV", numberofpeople: 6, liters: 70, price: 92.00, oldPrice: 80.00, discount: 12, showDiscount: true },
    { image: '/car2.png', name: "CR-V", description: "SUV", numberofpeople: 6, liters: 80, price: 80.00, discount: 35, showDiscount:false },
    { image: '/car3.png', name: "All New Terios", description: "SUV", numberofpeople: 6, liters: 90, price: 74.00, showDiscount: false },
    { image: '/car4.png', name: "CR-V", description: "SUV", numberofpeople: 6, liters: 80, price: 80.00, discount: 35, showDiscount: false },
    { image: '/car5.png', name: "MGZX Exclusive", description: "Hatchback", numberofpeople: 4, liters: 70, price: 76.00, oldPrice: 80.00, discount: 4, showDiscount: true },
    { image: '/car6.png', name: "New MGZS", description: "SUV", numberofpeople: 6, liters: 80, price: 80.00, discount: 35, showDiscount: false },
    { image: '/car5.png', name: "MGZX Exite", description: "Hatchback", numberofpeople: 4, liters: 90, price: 74.00, showDiscount: false },
    { image: '/car6.png', name: "Nissan GT-R", description: "SUV", numberofpeople: 6, liters: 80, price: 80.00, discount: 35, showDiscount: false },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
      {products.map((product, index) => (
        <RecommentionCard
          key={index}
          image={product.image}
          description={product.description}
          name={product.name}
          price={product.price}
          numberofpeople={product.numberofpeople}
          liters={product.liters}
          oldPrice={product.oldPrice}
          discount={product.discount}
          showDiscount={product.showDiscount}
        />
      ))}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <div className="bg-gray-100" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-xl text-gray-400">Recommendation Car</h1>
        </div>
        <ProductRow />
        <div className="flex justify-center mt-6">
        <button className="bg-blue-600 text-white py-3 px-8 rounded hover:bg-blue-700 transition-colors duration-300 mt-8 mb-8">
          Show more car
        </button>
      </div>
      </div>
    </div>
  );
};

export default App;
