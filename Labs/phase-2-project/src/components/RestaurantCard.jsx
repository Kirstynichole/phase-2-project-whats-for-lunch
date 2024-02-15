import React from "react";
import { NavLink } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

const RestaurantCard = ({ name, photo, address, cuisine }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="p-4">
        <img
          src={photo}
          alt="chosen restaurant"
          className="rounded-2xl items-center mx-auto"
          style={{ maxWidth: "100%", maxHeight: "250px" }}
        />
        <h2 className="items-center font-bold text-2xl text-center">{name}</h2>
        <p className="items-center text-center text-xs">Cuisine: {cuisine}</p>
        <p className="items-center text-center text-sm">{address}</p>
        <div className="justify-center flex">
        <button className="hover:bg-opacity-100 text-xs w-fit px-3 py-2 my-2 flex items-center rounded-md text-white bg-opacity-75 bg-pink-800">
          <NavLink
            to={`/reviews?restaurant=${encodeURIComponent(name)}`}
            //encodeURIComponent encodes special characters
            className="btn btn-primary"
          >
            View Reviews
            <IoIosArrowForward className="inline"/>
          </NavLink>
        </button>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
