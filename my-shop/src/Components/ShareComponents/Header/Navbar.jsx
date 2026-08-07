import React from "react";
import { BiCategory } from "react-icons/bi";
import { NavLink } from "react-router";
import { HiMiniShoppingCart } from "react-icons/hi2";

const Navbar = () => {
  return (
    <div className="border-y border-gray-200">
      <div className="flex items-center justify-between py-2 container mx-auto px-24">
        <div className="flex items-center gap-2 bgp text-white py-2 rounded-md px-6">
          <BiCategory />
          <p>All Category</p>
        </div>
        <div className="flex gap-12">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/shopnow">Shop Now</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/blog">Blog</NavLink>
        </div>
         <div className="flex items-center gap-2 bgp text-white py-2 rounded-md px-6">
          <HiMiniShoppingCart />
          <p>Show Now</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
