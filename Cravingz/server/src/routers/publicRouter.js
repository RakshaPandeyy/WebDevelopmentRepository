import express from "express";
import {
  NewContact,
  GetAllRestaurants,
  GetRestaurantMenuData,
} from "../controllers/publicControllers.js";
const router = express.Router();

router.post("/new-contact", NewContact);
router.get("/allRestaurants", GetAllRestaurants);
router.get("/restaurantMenu", GetRestaurantMenuData);
export default router;
