import express from 'express';
import { getAllUser, getUserDetails, loginUser, logout, registerUser } from '../controllers/user.js';
import { isAuthenticatedUser } from "../middlewares/auth.js";
const router = express.Router();
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/logout", logout);
router.get("/me", isAuthenticatedUser, getUserDetails);
router.get("/all", getAllUser);
export default router;