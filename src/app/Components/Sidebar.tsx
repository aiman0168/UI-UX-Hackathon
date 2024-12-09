// Sidebar.tsx
import React, { useState } from 'react';

const Sidebar = () => {
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedCapacity, setSelectedCapacity] = useState<string[]>([]);
  const [price, setPrice] = useState<number>(0);

  const handleTypeChange = (type: string) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((item) => item !== type) : [...prev, type]
    );
  };

  const handleCapacityChange = (capacity: string) => {
    setSelectedCapacity((prev) =>
      prev.includes(capacity) ? prev.filter((item) => item !== capacity) : [...prev, capacity]
    );
  };

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(parseInt(event.target.value, 10));
  };

  return (
    <div className="w-[360px] h-auto bg-white p-6 md:block hidden sm:block absolute">
      <div className="mb-6">
        <h4 className="text-xs text-gray-400 mt-4 mb-4">TYPE</h4>
        <div className="space-y-2">
          {['Sport (10)', 'SUV (12)', 'MPV (16)', 'Sedan (20)', 'Coupe (14)', 'Hatchback (14)'].map((type) => (
            <label key={type} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={selectedTypes.includes(type)}
                onChange={() => handleTypeChange(type)}
                className="peer form-checkbox accent-blue-500"
              />
              <span>
                {type.split(' ')[0]} <span className="text-gray-400">{type.match(/\(\d+\)/)}</span>
              </span>
            </label>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h4 className="text-xs text-gray-400 mt-4 mb-4">Capacity</h4>
        <div className="space-y-2">
          {['2-Person (10)', '4-Person (14)', '6-Person (12)', '8-Person (16)'].map((capacity) => (
            <label key={capacity} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={selectedCapacity.includes(capacity)}
                onChange={() => handleCapacityChange(capacity)}
                className="peer form-checkbox accent-blue-500"
              />
              <span>
                {capacity.split(' ')[0]} <span className="text-gray-400">{capacity.match(/\(\d+\)/)}</span>
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Section */}
      <div className="mb-6">
        <h4 className="text-xs text-gray-400 mt-4 mb-4">Price</h4>
        <input
          type="range"
          min="0"
          max="1000"
          value={price}
          onChange={handlePriceChange}
          className="w-full accent-blue-600"
        />
        <div className="flex justify-between text-sm text-gray-600">
          <p>Max. ${price}.00</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
