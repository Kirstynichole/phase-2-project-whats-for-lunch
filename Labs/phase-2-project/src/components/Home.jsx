import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import { IoIosArrowForward } from "react-icons/io";

function Home() {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [chosenRestaurant, setChosenRestaurant] = useState({});
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3000/restaurants")
      .then((response) => response.json())
      .then((restaurants) => {
        setAllRestaurants(restaurants);
        let randomIndex = Math.floor(Math.random() * restaurants.length);
        setChosenRestaurant(restaurants[randomIndex]);
      });
  }, []);

  const randomRestaurant = () => {
    let randomIndex = Math.floor(Math.random() * allRestaurants.length);
    setChosenRestaurant(allRestaurants[randomIndex]);
  };

  const handleButtonClick = () => {
    setIsButtonClicked(true);
  };

  return (
    <div>
      <div
        name="home"
        className="justify-center items-center"
        style={{ overflowY: "scroll" }}
      >
        <div
          className="h-screen items-center px-4"
          style={{ paddingTop: "100px" }}
        >
          {!isButtonClicked && (
            <div className="mx-auto p-5 w-2/3 md:w-1/2">
              <button
                className="font-header leading- hover:bg-opacity-100 w-fit px-3 py-2 my-2 flex border-2 border-pink-600 items-center rounded-md text-white bg-opacity-75 bg-pink-800"
                onClick={handleButtonClick}
                style={{fontSize: '5.5em'}}
              >
                What's for lunch?
              </button>
            </div>
          )}

          {isButtonClicked && (
            <div className=" border-2 rounded-2xl bg-white bg-opacity-60 text-pink-800 border-pink-600 mx-auto p-5 w-2/3 md:w-1/2">
              <h1 className="text-5xl w-full text-center py-3 items-center font-header">
                Lunch is handled.
              </h1>
              <RestaurantCard
                photo={
                  chosenRestaurant.photo
                    ? chosenRestaurant.photo
                    : require("../stockImage.png")
                }
                name={chosenRestaurant.name}
                address={chosenRestaurant.address}
                cuisine={chosenRestaurant.cuisine}
              />
              <div className="items-center justify-center flex">
                <button
                  onClick={randomRestaurant}
                  className="hover:bg-opacity-100 w-fit px-3 py-2 my-2 flex items-center rounded-md text-white bg-opacity-75 bg-pink-800"
                >
                  Not today babes
                  <IoIosArrowForward />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
