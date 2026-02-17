import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../config/Api";

const RestaurantDisplayMenu = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState();
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchRestaurantDetails = async () => {
    setLoading(true);
    try {
      const res = await api.get(`/public/restaurant/${id}`);
      setRestaurant(res.data.data);
      setMenuItems(res.data.data.menuItems);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRestaurantDetails();
  }, []);

  if (loading) return <div className="text-center mt-10">Loading...</div>;

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Restaurant Banner */}
      <div className="relative h-64">
        <img
          src={restaurant?.photo?.url || "/food-placeholder.jpg"}
          alt={restaurant?.restaurantName}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white">
          <h1 className="text-4xl font-bold">
            {restaurant?.restaurantName}
          </h1>
          <p className="mt-2">⭐ {restaurant?.rating || "4.2"}</p>
          <p className="text-sm mt-1">{restaurant?.cuisine}</p>
        </div>
      </div>

      {/* Menu Section */}
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          Our Menu
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {menuItems?.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition flex"
            >
              {/* Item Image */}
              <img
                src={item.photo?.url || "/food-placeholder.jpg"}
                alt={item.name}
                className="w-32 h-32 object-cover rounded-l-xl"
              />

              {/* Item Details */}
              <div className="p-4 flex flex-col justify-between w-full">
                <div>
                  <h3 className="text-lg font-bold text-gray-800">
                    {item.name}
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">
                    {item.description}
                  </p>
                </div>

                <div className="flex justify-between items-center mt-3">
                  <span className="font-bold text-lg text-green-600">
                    ₹{item.price}
                  </span>

                  <button
                    className="bg-amber-500 hover:bg-amber-600 
                               text-white px-4 py-1 rounded-full 
                               text-sm font-medium"
                  >
                    Add +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default RestaurantDisplayMenu;
