import React from 'react';
import Image from 'next/image';

const Payment = () => {
  return (
    <div className="flex flex-col sm:flex-row p-6 bg-gray-100" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
      <div className="flex flex-col space-y-6 w-full sm:w-2/3">
        {/* Box 1 */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold">Billing Info</h2>
          <div className="flex justify-between mb-4 text-gray-400">
            <p>Please enter your billing info</p>
            <p className="mt-1/2">Step 1 of 4</p>
          </div>
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:space-x-4">
              <div className="w-full sm:w-1/2">
                <label className="block text-gray-700 font-semibold mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-2 bg-gray-100 rounded-md"
                  placeholder="Your name"
                />
              </div>
              <div className="w-full sm:w-1/2 mt-4 sm:mt-0">
                <label className="block text-gray-700 font-semibold mb-2">Phone Number</label>
                <input
                  type="text"
                  id="phone"
                  className="w-full p-2 bg-gray-100 rounded-md"
                  placeholder="Phone number"
                />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:space-x-4 mt-4">
              <div className="w-full sm:w-1/2">
                <label className="block text-gray-700 font-semibold mb-2">Address</label>
                <input
                  type="text"
                  id="address"
                  className="w-full p-2 bg-gray-100 rounded-md"
                  placeholder="Address"
                />
              </div>
              <div className="w-full sm:w-1/2 mt-4 sm:mt-0">
                <label className="block text-gray-700 font-semibold mb-2">Town/City</label>
                <input
                  type="text"
                  id="city"
                  className="w-full p-2 bg-gray-100 rounded-md"
                  placeholder="Town or city"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Box 2 */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Rental Info</h2>
          <div className="flex justify-between mb-4 text-gray-400">
            <p>Please select your rental date</p>
            <p className="mt-1/2">Step 2 of 4</p>
          </div>

          <div className="flex items-center space-x-4 mb-4">
            <Image src="/mark.png" alt="icon" width={24} height={24} className="text-black text-3xl" />
            <h2 className="text-base text-black ">Pick-Up</h2>
          </div>

          <div className="flex flex-col sm:flex-row sm:space-x-4">
            <div className="w-full sm:w-1/2">
              <label className="block text-gray-700 font-semibold mb-2">Location</label>
              <input
                type="text"
                id="location"
                className="w-full p-2 bg-gray-100 rounded-md"
                placeholder="Select your city"
              />
            </div>
            <div className="w-full sm:w-1/2 mt-4 sm:mt-0">
              <label className="block text-gray-700 font-semibold mb-2">Date</label>
              <input
                type="date"
                id="date"
                className="w-full p-2 bg-gray-100 rounded-md text-gray-400"
              />
            </div>
          </div>

          <div className="w-full sm:w-1/2 mt-4">
              <label className="block text-gray-700 font-semibold mb-2">Time</label>
              <input
                type="time"
                id="time"
                className="w-full p-2 bg-gray-100 rounded-md text-gray-400"
              />
            </div>

          <div className="flex items-center space-x-4 mt-4 mb-4">
            <Image src="/mark.png" alt="icon" width={24} height={24} className="text-black text-3xl" />
            <h2 className="text-base text-black">Drop-off</h2>
          </div>

          <div className="flex flex-col sm:flex-row sm:space-x-4">
            <div className="w-full sm:w-1/2">
              <label className="block text-gray-700 font-semibold mb-2">Location</label>
              <input
                type="text"
                id="location"
                className="w-full p-2 bg-gray-100 rounded-md"
                placeholder="Select your city"
              />
            </div>
            <div className="w-full sm:w-1/2 mt-4 sm:mt-0">
              <label className="block text-gray-700 font-semibold mb-2">Date</label>
              <input
                type="date"
                id="date"
                className="w-full p-2 bg-gray-100 rounded-md text-gray-400"
              />
            </div>
          </div>
          <div className="w-full sm:w-1/2 mt-4">
              <label className="block text-gray-700 font-semibold mb-2">Time</label>
              <input
                type="time"
                id="time"
                className="w-full p-2 bg-gray-100 rounded-md text-gray-400"
              />
            </div>
        </div>

        {/* Box 3 */}
        <div className="bg-white p-6 rounded-lg shadow-md relative">
          <h2 className="text-lg font-semibold mb-4">Payment Method</h2>
          <div className="flex justify-between mb-4 text-gray-400">
            <p>Please select your payment method</p>
            <p className="mt-1/2">Step 3 of 4</p>
          </div>
          <div className="space-y-4 bg-gray-100 p-6 rounded-lg">
            <div className="flex items-center justify-between space-x-4">
              <div className="flex flex-row">
              <Image src="/mark.png" alt="icon" width={24} height={24} className="text-black text-3xl mr-2" />
              <h2 className="font-semibold">Credit Card</h2>
              </div>
              <div className='ml-4'>
              <Image src="/Visa.png" alt="icon" width={92} height={20} className="text-black text-3xl" />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:space-x-4">
              <div className="w-full sm:w-1/2">
                <label className="block text-gray-700 font-semibold mb-2">Card Number</label>
                <input
                  type="text"
                  id="cardNumber"
                  className="w-full p-2 bg-white rounded-md"
                  placeholder="Card number"
                />
              </div>
              <div className="w-full sm:w-1/2 mt-4 sm:mt-0">
                <label className="block text-gray-700 font-semibold mb-2">Expiration Date</label>
                <input
                  type="date"
                  id="expDate"
                  className="w-full p-2 bg-white rounded-md text-gray-400"
                />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:space-x-4 mt-4">
              <div className="w-full sm:w-1/2">
                <label className="block text-gray-700 font-semibold mb-2">Card Holder</label>
                <input
                  type="text"
                  id="cardHolder"
                  className="w-full p-2 bg-white rounded-md"
                  placeholder="Card holder"
                />
              </div>
              <div className="w-full sm:w-1/2 mt-4 sm:mt-0">
                <label className="block text-gray-700 font-semibold mb-2">CVC</label>
                <input
                  type="text"
                  id="cvc"
                  className="w-full p-2 bg-white rounded-md"
                  placeholder="CVC"
                />
              </div>
            </div>
          </div>

          <div className="mt-6">
            <div className="flex items-center justify-between bg-gray-100 p-2">
              <div className="flex items-center">
                <input type="checkbox" id="option1" className="mr-2" />
                <span className='font-semibold'>Paypal</span>
              </div>
              <Image
                src="/PayPal.png"
                alt="image 1"
                width={100}
                height={24}
                className="ml-2"
              />
            </div>

            <div className="flex items-center justify-between mt-4 bg-gray-100 p-2">
              <div className="flex items-center">
                <input type="checkbox" id="option2" className="mr-2" />
                <span className='font-semibold'>Bitcoin</span>
              </div>
              <Image
                src="/Bitcoin.png"
                alt="image 2"
                width={94}
                height={20}
                className="ml-2"
              />
            </div>
          </div>
        </div>

        {/* Box 4 */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Confirmation</h2>
          <div className="flex justify-between mb-4 text-gray-400">
            <p>We are getting to the end. Just a few clicks and your rental is ready!</p>
            <p className="mt-1/2">Step 4 of 4</p>
          </div>
          <div className="space-y-4">
            <div>
              <label className="flex items-center rounded-md bg-gray-100 p-2 pl-4 mb-6">
                <input type="checkbox" className="mr-2" />
                I agree with sending marketing and newsletter emails. No spam, promised!
              </label>
              <label className="flex items-center rounded-md bg-gray-100 p-2 pl-4 mb-2">
                <input type="checkbox" className="mr-2" />
                I agree with our terms and conditions and our privacy policy
              </label>
            </div>
            <button className="w-full sm:w-36 h-14 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Rent Now
            </button>
          </div>
          <div className="flex flex-col mt-6">
            <img src="Layer.png" alt="icon" className="w-10 h-10 mr-4" />
            <div>
              <p className="mt-2 mb-2">All your data is safe</p>
              <p className="text-sm text-gray-400">We are using the most advanced security to provide you the best experience ever.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Box 5 */}
      <div className="bg-white p-6 rounded-lg shadow-md sm:w-1/3 ml-4 mt-6 sm:mt-0 h-[580px]">
        <h2 className="text-lg font-semibold mb-4">Rental Summary</h2>
        <div className="flex justify-between mb-4 text-gray-400">
          <p>Price may change depending on the length of the rental and the price of your rental car.</p>
        </div>
        <div className="flex flex-col items-center sm:items-start sm:space-x-6">
          <div className="flex flex-row">
            <div className="text-center mb-6 sm:mb-0 bg-[#3563E9] w-36 h-16 rounded-md">
              <img
                src="hero2.png"
                alt="Vehicle"
                width={132}
                height={108}
                className="mx-auto w-28 h-9 mt-4"
              />
            </div>
            <div className="ml-4 mt-2">
              <p className="text-xl font-semibold">Nissan GT-R</p>
              <p>Rating: 4.5</p>
            </div>
          </div>
          <div className="mt-16">
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-400">Subtotal</span>
                <span>$80</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Tax</span>
                <span>$0</span>
              </div>
              <div className="flex justify-between bg-gray-100 p-2 rounded-lg">
                <span className="text-gray-400 mt-2">Apply Promo Code</span>
                <p className="ml-16 mt-2">Apply Now</p>
              </div>
              <div className="flex flex-row">
                <div className="flex flex-col justify-between mr-12">
                  <span className="font-semibold">Total Rent Price:</span>
                  <p className="text-gray-400">Overall price includes rental discount</p>
                </div>
                <span className="text-2xl font-semibold">$80.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;