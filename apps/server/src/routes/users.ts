import express from "express";
import * as UserController from "../controllers/authController";
import { requiresAuth } from "../middleware/auth";


const router = express.Router();

router.get('/profile', requiresAuth, UserController.getAuthenticatedUser);


router.get("/", requiresAuth, UserController.getAuthenticatedUser);

router.post("/signup", UserController.signUp);

router.post("/login", UserController.login);

router.post("/logout", UserController.logout);

export default router;