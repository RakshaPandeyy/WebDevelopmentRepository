import express from 'express'
import {
    userRegister,
    userLogin,
    userLogout,
    userUpdate
} from "../controllers/myControllers.js"

const router = express.Router();
router.post("/register",userRegister);
router.post("/login",userLogin);
router.get("/logout",userLogout);
router.put("/update",userUpdate);

export default router;