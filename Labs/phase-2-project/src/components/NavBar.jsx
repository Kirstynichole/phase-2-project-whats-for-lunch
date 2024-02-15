import React, { useState } from "react";
import { FaBars, FaTimes, FaHeart } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const NavBar = ({ backgroundStyle }) => {
  const [nav, setNav] = useState(false);

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 rounded-bl-2xl rounded-br-2xl text-white bg-opacity-75 bg-pink-500 fixed">
      <div>
        <h1 className="cursor-pointer text-4xl font-header ml-2">
          <NavLink onClick={nav ? (() => setNav(!nav)) : null} to="/">
            H<FaHeart className="inline text-2xl" />
            me
          </NavLink>
        </h1>
      </div>

      <ul className="hidden md:flex">
        <li className="px-4 text-2xl font-header cursor-pointer text-white">
          <NavLink to="restaurants">Restaurants</NavLink>
        </li>
        <li className="text-2xl font-header text-white">
          <FaHeart />
        </li>
        <li className="px-4 text-2xl font-header cursor-pointer text-white">
          <NavLink to="reviews">Reviews</NavLink>
        </li>
        <li className="text-2xl font-header text-white">
          <FaHeart />
        </li>
        <li className="px-4 text-2xl font-header cursor-pointer text-white">
          <NavLink to="submitReview">Submit Review</NavLink>
        </li>
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 text-white md:hidden"
      >
        {nav ? <FaTimes size={20} /> : <FaBars size={20} />}
      </div>

      {nav && (
        <ul
          style={backgroundStyle}
          className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen text-white"
        >
          <li className="px-4 cursor-pointer py-6 text-4xl text-white font-header">
            <NavLink onClick={() => setNav(!nav)} to="restaurants">
              Restaurants
            </NavLink>
          </li>
          <li className="text-2xl font-header text-white">
            <FaHeart />
          </li>
          <li className="px-4 cursor-pointer py-6 text-4xl text-white font-header">
            <NavLink onClick={() => setNav(!nav)} to="reviews">
              Reviews
            </NavLink>
          </li>
          <li className="text-2xl font-header text-white">
            <FaHeart />
          </li>
          <li className="px-4 cursor-pointer py-6 text-4xl text-white font-header">
            <NavLink onClick={() => setNav(!nav)} to="submitReview">
              Submit Review
            </NavLink>
          </li>
        </ul>
      )}
    </div>
  );
};

export default NavBar;
