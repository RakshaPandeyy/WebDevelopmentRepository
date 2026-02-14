import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../config/Api";

const OrderNow = () => {
  const navigate = useNavigate();
  const [restaurants, setRestaurants] = useState();
  const [loading, setLoading] = useState(false);

  const fetchAllRestaurant = async () => {
    setLoading(true);
    try {
      const res = await api.get("/public/allRestaurants");
      setRestaurants(res.data.data);
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message || "Unknown Error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllRestaurant();
  }, []);

  const handleResturantClick = (restaurantID) => {
    console.log("restaurant Clicked");
    console.log("OrderNow Page", restaurantID);

    navigate(`/restaurant/${restaurantID}`);
  };
  console.log(restaurants);

  return (
    <>
      <div className="bg-gray-100 p-4 min-h-screen">
        {/* Heading */}
        <div className="flex flex-col items-center justify-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Order Now</h1>
          <p className="text-gray-600 mt-2">
            Browse our menu and place your order now!
          </p>
        </div>

        {/* Restaurant Cards */}
        {restaurants ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {restaurants.map((restaurant, idx) => (
              <div
                key={idx} 
                onClick={() => handleResturantClick(restaurant._id)}
                className="bg-white rounded-xl border border-gray-200 
                         hover:shadow-xl transition cursor-pointer
                         overflow-hidden group"
              >
                {/* Image */}
                <img
                  src={restaurant.photo?.url || "/food-placeholder.jpg"}
                  alt={restaurant.restaurantName}
                  className="w-full h-44 object-cover rounded-t-xl
                           group-hover:scale-105 transition duration-300"
                />

                {/* Content */}
                <div className="p-4">
                  {/* Name */}
                  <h2 className="text-lg font-bold text-gray-800 truncate">
                    {restaurant.restaurantName}
                  </h2>


                  {/* Rating */}
                  <p className="text-green-600 font-semibold mt-1">
                    ⭐ {restaurant.rating || "4.2"}
                  </p>

                  {/* Cuisine */}
                  <div className="flex gap-2 mt-3 flex-wrap">
                    {restaurant.cuisine
                      ?.split(", ")
                      .slice(0, 2)
                      .map((cusine, idx) => (
                        <span
                          key={idx}
                          className="py-1 px-3 bg-amber-200 
                                   rounded-full text-xs 
                                   capitalize font-medium"
                        >
                          {cusine.toLowerCase()}
                        </span>
                      ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-600 mt-10">
            Loading restaurants...
          </div>
        )}
      </div>
    </>
  );
};

export default OrderNow;
