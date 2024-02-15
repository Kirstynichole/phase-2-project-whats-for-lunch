import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";

const Restaurants = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/restaurants")
      .then((response) => response.json())
      .then((restaurants) => setRestaurants(restaurants));
  }, []);

  return (
    <div className="h-screen items-center px-4" style={{ paddingTop: "100px" }}>
      <div className="border-2 rounded-2xl bg-white bg-opacity-60 text-pink-800 border-pink-600 mx-auto p-5 w-2/3">
        <h1 className="text-5xl w-full text-center py-3 items-center font-header">
          Restaurants:
        </h1>
        {restaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.id}
            name={restaurant.name}
            photo={restaurant.photo ? restaurant.photo : require("../stockImage.png")}
            address={restaurant.address}
            cuisine={restaurant.cuisine}
          />
        ))}
      </div>
    </div>
  );
};

export default Restaurants;
