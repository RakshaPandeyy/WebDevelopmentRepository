import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../config/Api";
import toast from "react-hot-toast";

const RestaurantDisplayMenu = () => {
  const { id: restaurantId } = useParams();

  const [restaurantData, setRestaurantData] = useState(null);
  const [filter, setFilter] = useState("all");

  const fetchRestaurantMenu = async () => {
    try {
      const res = await api.get(
        `/public/restaurant-menu/${restaurantId}/1`
      );
      setRestaurantData(res.data.data);
    } catch (error) {
      console.log(error);
      toast.error(
        error?.response?.data?.message || "Failed to load menu"
      );
    }
  };

  useEffect(() => {
    fetchRestaurantMenu();
  }, [restaurantId]);

  if (!restaurantData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg text-gray-500">Loading menu...</p>
      </div>
    );
  }

  const filteredMenu =
    filter === "all"
      ? restaurantData.menu
      : restaurantData.menu.filter(
          (item) => item.type === filter
        );

  return (
    <div className="min-h-screen bg-gray-50">

      {/* ================= HEADER ================= */}
      <div className="bg-white shadow-sm px-8 py-6">
        <h1 className="text-3xl font-bold text-gray-800">
          {restaurantData.restaurant?.name}
        </h1>
        <p className="text-gray-500 mt-1">
          {restaurantData.restaurant?.cuisine}
        </p>
      </div>

      {/* ================= FILTERS ================= */}
      <div className="flex gap-4 px-8 py-4 bg-white border-t">
        <button
          onClick={() => setFilter("all")}
          className={`px-4 py-1 rounded-full border ${
            filter === "all"
              ? "bg-orange-500 text-white"
              : "bg-white text-gray-600"
          }`}
        >
          All
        </button>

        <button
          onClick={() => setFilter("veg")}
          className={`px-4 py-1 rounded-full border ${
            filter === "veg"
              ? "bg-green-600 text-white"
              : "bg-white text-gray-600"
          }`}
        >
          Veg
        </button>

        <button
          onClick={() => setFilter("non-veg")}
          className={`px-4 py-1 rounded-full border ${
            filter === "non-veg"
              ? "bg-red-600 text-white"
              : "bg-white text-gray-600"
          }`}
        >
          Non-Veg
        </button>
      </div>

      {/* ================= MENU GRID ================= */}
      <div className="px-8 py-6 grid grid-cols-1 md:grid-cols-2 gap-6">

        {filteredMenu.map((item) => (
          <div
            key={item._id}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 flex justify-between p-4 border border-gray-100"
          >

            {/* LEFT SIDE */}
            <div className="flex-1 pr-4">
              <div className="flex items-center gap-2 mb-1">

                {/* Veg/Non-Veg Indicator */}
                <span
                  className={`w-4 h-4 border-2 rounded-sm flex items-center justify-center ${
                    item.type === "veg"
                      ? "border-green-600"
                      : "border-red-600"
                  }`}
                >
                  <span
                    className={`w-2 h-2 rounded-full ${
                      item.type === "veg"
                        ? "bg-green-600"
                        : "bg-red-600"
                    }`}
                  ></span>
                </span>

                <span className="text-sm text-gray-500 capitalize">
                  {item.type}
                </span>
              </div>

              <h3 className="text-lg font-semibold text-gray-800">
                {item.itemName}
              </h3>

              <p className="text-md font-medium text-gray-700 mt-1">
                ₹{item.price}
              </p>

              <p className="text-sm text-gray-500 mt-2 line-clamp-2">
                {item.description}
              </p>

              {item.availability === "available" ? (
                <button className="mt-3 bg-orange-500 hover:bg-orange-600 text-white px-4 py-1 rounded-md text-sm font-medium transition">
                  ADD
                </button>
              ) : (
                <span className="mt-3 inline-block text-red-500 text-sm">
                  Currently Unavailable
                </span>
              )}
            </div>

            {/* RIGHT SIDE IMAGE */}
            <div className="w-32 h-28 relative">
              <img
                src={item.images?.[0]?.url}
                alt={item.itemName}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantDisplayMenu;
