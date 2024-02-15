import React, { useState, useEffect } from "react";
import { FaHeart } from "react-icons/fa";
import { FaInfinity } from "react-icons/fa6";
import { useLocation, NavLink } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [selectedRestaurant, setSelectedRestaurant] = useState("");
  const location = useLocation();

  useEffect(() => {
    fetch("http://localhost:3000/reviews")
      .then((response) => response.json())
      .then((reviews) => setReviews(reviews));
  }, []);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const restaurantName = searchParams.get("restaurant");
    setSelectedRestaurant(restaurantName);
  }, [location.search]);

  const uniqueRestaurants = [
    ...new Set(reviews.map((review) => review.restaurant)),
  ];
  //set removes duplicate elements and "..." converts the set back to an array

  const filteredReviews = reviews.filter((review) =>
    selectedRestaurant
      ? review.restaurant.toLowerCase() === selectedRestaurant.toLowerCase()
      : true
  );

  return (
    <div className="h-screen items-center px-4" style={{ paddingTop: "100px" }}>
      <div className="border-2 rounded-2xl bg-white bg-opacity-60 text-pink-800 border-pink-600 mx-auto p-5 w-2/3">
        <h1 className="text-5xl w-full text-center py-3 items-center font-header">
          Reviews:
        </h1>
        <div className="justify-center flex ">
          <select
            value={selectedRestaurant}
            onChange={(e) => setSelectedRestaurant(e.target.value)}
            className="p-2 text-xs mb-2 bg-pink-800 bg-opacity-75 rounded-md text-white focus:outline-none"
            name="restaurant-dropdown"
          >
            <option value="">All Restaurants</option>
            {uniqueRestaurants.map((restaurant) => (
              <option key={restaurant} value={restaurant}>
                {restaurant}
              </option>
            ))}
          </select>
        </div>
        {filteredReviews.length === 0 ? (
          <>
            <p className="text-center">
              No reviews available for this restaurant.
            </p>
            <div className="justify-center flex">
              <button className="hover:bg-opacity-100 text-xs w-fit px-3 py-2 my-2 flex items-center rounded-md text-white bg-opacity-75 bg-pink-800">
                <NavLink to="/submitReview">Submit a Review</NavLink>
                <IoIosArrowForward />
              </button>
            </div>
          </>
        ) : (
          filteredReviews.map((review) => (
            <ul className="p-3" key={review.id}>
              <h2 className="font-bold">{review.restaurant}</h2>
              <li>{review.review}</li>
              <li className="text-sm">
                {review.rating === "1" ? (
                  <FaHeart className="inline" />
                ) : review.rating === "2" ? (
                  <>
                    <FaHeart className="inline" />{" "}
                    <FaHeart className="inline" />
                  </>
                ) : review.rating === "3" ? (
                  <>
                    <FaHeart className="inline" />{" "}
                    <FaHeart className="inline" />{" "}
                    <FaHeart className="inline" />
                  </>
                ) : review.rating === "4" ? (
                  <>
                    <FaHeart className="inline" />{" "}
                    <FaHeart className="inline" />{" "}
                    <FaHeart className="inline" />{" "}
                    <FaHeart className="inline" />
                  </>
                ) : review.rating === "5" ? (
                  <>
                    <FaHeart className="inline" />{" "}
                    <FaHeart className="inline" />{" "}
                    <FaHeart className="inline" />{" "}
                    <FaHeart className="inline" />{" "}
                    <FaHeart className="inline" />
                  </>
                ) : review.rating === "0" ? (
                  <>-</>
                ) : (
                  <FaInfinity />
                )}
              </li>
              <li>-{review.reviewer}</li>
            </ul>
          ))
        )}
      </div>
    </div>
  );
};

export default Reviews;
