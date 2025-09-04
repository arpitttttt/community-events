import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="bg-gradient-to-r from-purple-100 to-pink-100 sticky top-0 z-50 shadow-md py-4 px-8">
      <div className="max-w-6xl mx-auto flex justify-center items-center">
        
        <Link
          to="/"
          className="flex items-center gap-2 text-2xl font-extrabold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent cursor-pointer"
        >
          <span>🎉</span>
          <span>Community Events</span>
        </Link>
      </div>
    </header>
  );
}
