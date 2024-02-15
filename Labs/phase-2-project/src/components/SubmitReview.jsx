import React, { useState, useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const SubmitReview = () => {
  const [review, setReview] = useState("");
  const [rating, setRating] = useState("");
  const [reviewer, setReviewer] = useState("");
  const [restaurant, setRestaurant] = useState("");
  const [restaurantsList, setRestaurantsList] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3000/restaurants")
      .then((response) => response.json())
      .then((restaurants) => setRestaurantsList(restaurants))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const reviewInfo = {
      review: review,
      rating: rating,
      reviewer: reviewer,
      restaurant: restaurant,
    };
    fetch("http://localhost:3000/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "Application/JSON",
      },
      body: JSON.stringify(reviewInfo),
    })
      .then((respose) => respose.json())
      .then((newReview) => {
        setReview("");
        setRating("");
        setReviewer("");
        setRestaurant("");
        navigate("/Reviews");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="h-screen items-center px-4" style={{ paddingTop: "100px" }}>
      <div className=" border-2 rounded-2xl bg-white bg-opacity-60 text-pink-800 border-pink-600 mx-auto p-5 w-2/3">
        <h1 className="text-5xl w-full text-center py-3 items-center font-header">
          Submit a review:
        </h1>
        <div className="flex justify-center items-center">
          <form
            className="flex flex-col w-full md:w-1/2"
            onSubmit={handleSubmit}
          >
            <select
              name="restaurant"
              value={restaurant}
              onChange={(event) => setRestaurant(event.target.value)}
              className="p-2 mb-2 bg-pink-800 bg-opacity-75 rounded-md text-white focus:outline-none"
            >
              <option value="">Select a restaurant</option>
              {restaurantsList.map((restaurant) => (
                <option key={restaurant.id} value={restaurant.name}>
                  {restaurant.name}
                </option>
              ))}
            </select>
            <textarea
              type="text"
              name="review"
              rows="5"
              placeholder="Review..."
              value={review}
              onChange={(event) => setReview(event.target.value)}
              className="p-2 mb-2 bg-pink-800 bg-opacity-75 rounded-md text-white focus:outline-none"
            />
            <input
              type="number"
              name="rating"
              step="1"
              placeholder="Rating out of 5"
              value={rating}
              onChange={(event) => {
                const inputValue = event.target.value;
                if (/^[0-6]$/.test(inputValue)) {
                  setRating(inputValue);
                }
              }}
              className="p-2 mb-2 bg-pink-800 bg-opacity-75 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="reviewer"
              placeholder="Your Name"
              value={reviewer}
              onChange={(event) => setReviewer(event.target.value)}
              className="p-2 mb-2 bg-pink-800 bg-opacity-75 rounded-md text-white focus:outline-none"
            />
            <button className="hover:bg-opacity-100 w-fit px-3 py-2 my-2 flex items-center rounded-md text-white bg-opacity-75 bg-pink-800">
              Submit
              <IoIosArrowForward />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SubmitReview;
