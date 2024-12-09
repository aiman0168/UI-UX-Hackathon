import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-16" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0">

          <div className="flex flex-col items-start space-y-4">
            <div className="text-2xl font-bold text-[32px] leading-[48px] tracking-[-3%]" style={{ color: "#3563E9" }}>
              MORENT
            </div>
            <p className="text-gray-600 text-md">
              Our vision is to provide convenience<br />
              and help increase your sales business
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-12 md:gap-24">
            <div className="flex flex-col space-y-4">
              <h3 className="text-lg font-semibold text-black">About</h3>
              <ul className="space-y-3 text-gray-600">
                <li>How it works</li>
                <li>Featured</li>
                <li>Partnership</li>
                <li>Business Relation</li>
              </ul>
            </div>

            <div className="flex flex-col space-y-4">
              <h3 className="text-lg font-semibold text-black">Community</h3>
              <ul className="space-y-3 text-gray-600">
                <li>Events</li>
                <li>Blog</li>
                <li>Podcast</li>
                <li>Invite a friend</li>
              </ul>
            </div>

            <div className="flex flex-col space-y-4">
              <h3 className="text-lg font-semibold text-black">Socials</h3>
              <ul className="space-y-3 text-gray-600">
                <li>Discord</li>
                <li>Instagram</li>
                <li>Twitter</li>
                <li>Facebook</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-300 my-8"></div>

        <div className="flex justify-between items-center text-sm font-bold">
          <p className="text-black">&copy; 2024 MORENT. All rights reserved.</p>
          <div className="space-x-6">
            <a href="/privacy-policy" className="text-black hover:text-white">Privacy & Policy</a>
            <a href="/terms-and-conditions" className="text-black hover:text-white">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;