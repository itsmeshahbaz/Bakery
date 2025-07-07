import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-amber-100 text-base-content px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
        {/* Logo & Info */}
        <aside className="col-span-1 md:col-span-1 flex flex-col items-start">
          <img src="../imgs/logo.png" alt="Logo" className="h-20 mb-2" />
          <p className="text-gray-800 font-semibold">Meal Mate</p>
          <p className="text-sm text-gray-600">Created by sm_developer</p>
        </aside>

        {/* Menu Links */}
        <div className="col-span-1">
          <h6 className="text-lg font-semibold mb-2">Rice</h6>
          <ul className="space-y-1 text-sm text-gray-700">
            <li><Link className="hover:underline">Baryani</Link></li>
            <li><Link className="hover:underline">Chana Pulao</Link></li>
            <li><Link className="hover:underline">Daal Chawal</Link></li>
          </ul>
        </div>

        <div className="col-span-1">
          <h6 className="text-lg font-semibold mb-2">Vegetable</h6>
          <ul className="space-y-1 text-sm text-gray-700">
            <li><Link className="hover:underline">Aloo Palak</Link></li>
            <li><Link className="hover:underline">Aloo Achaar</Link></li>
          </ul>
        </div>

        <div className="col-span-1">
          <h6 className="text-lg font-semibold mb-2">Daal</h6>
          <ul className="space-y-1 text-sm text-gray-700">
            <li><Link className="hover:underline">Daal Mach</Link></li>
            <li><Link className="hover:underline">Anda Chane</Link></li>
            <li><Link className="hover:underline">Daal Chana</Link></li>
          </ul>
        </div>

        <div className="col-span-1">
          <h6 className="text-lg font-semibold mb-2">Chicken</h6>
          <ul className="space-y-1 text-sm text-gray-700">
            <li><Link className="hover:underline">Shami Kabab</Link></li>
            <li><Link className="hover:underline">Kofte</Link></li>
            <li><Link className="hover:underline">Aloo Keema</Link></li>
            <li><Link className="hover:underline">Aloo Chicken</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom note */}
      <div className="text-center mt-10 text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Meal Mate. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
