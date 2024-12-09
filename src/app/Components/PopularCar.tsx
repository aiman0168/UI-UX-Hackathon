import React from 'react';
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
        <img src={image} alt="Car" className="w-[232px] h-[72px] object-cover rounded-lg mt-16" />
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
    { image: 'hero1.png', name: "Koenigsegg", description: "Sport", numberofpeople: 2, liters: 90, price: 99.00, discount: 40, showDiscount: false },
    { image: 'hero2.png', name: "Nissan GT-R", description: "Sport", numberofpeople: 2, liters: 80, price: 80.00, oldPrice: 100.00, discount: 35, showDiscount: true },
    { image: 'Car.png', name: "Rolls-Royce", description: "Sedan", numberofpeople: 2, liters: 70, price: 96.00, showDiscount: false },
    { image: 'hero2.png', name: "Nissan GT-R", description: "Sport", numberofpeople: 2, liters: 80, price: 80.00, oldPrice: 100.00, discount: 35, showDiscount: true },
  ];

  return (
    <div className="mt-8">
      <div className="overflow-x-auto flex space-x-6 pb-6 md:hidden">
        {products.map((product, index) => (
          <div key={index} className="flex-shrink-0">
            <PopularCard
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
          </div>
        ))}
      </div>
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <PopularCard
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
    </div>
  );
};

const App: React.FC = () => {
  return (
    <div className="bg-gray-100" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-xl text-gray-400">Popular Car</h1>
          <a href="#" className="text-blue-600 text-lg font-semibold">View All</a>
        </div>
        <ProductRow />
      </div>
    </div>
  );
};

export default App;