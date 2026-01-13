import express from 'express'
import {
    UserLogin, UserLogout, UserRegister
} from "../controllers/authControllers.js"

const router = express.Router();

router.post("/register", UserRegister)
router.post("/login", UserLogin)
router.post("/logout", UserLogout
)

export default router;
