"use client";

import { signIn, useSession } from "next-auth/react";
import { json } from "stream/consumers";

export const Navbar = () => {
    const session = useSession();

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-2xl font-bold text-gray-800">Finance101</div>

          {/* Desktop Menu */} 
          <div className="hidden md:flex space-x-6">
            <button
              onClick={(e) => {
                console.log("tis ");
                signIn();
              }}
              className="text-gray-600 hover:text-blue-500 hover:cursor-pointer"
            >
              Sign In
            </button>
          </div>
        </div>
      <div className="text-blue-700">{JSON.stringify(session)}</div>
      </div>
    </nav>
  );
};

export default Navbar;
