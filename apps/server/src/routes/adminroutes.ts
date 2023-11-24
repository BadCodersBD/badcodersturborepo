import express from "express";
import { isAdmin } from "../middleware/isAdmin";
import { requiresAuth } from "../middleware/auth";
import * as adminController from "../controllers/adminController";

const router = express.Router();

router.get("/allusersdata", requiresAuth, isAdmin, adminController.getAllUserData);
router.get("/allrentaldata", requiresAuth, isAdmin, adminController.getAllRentData);
router.get("/allrentaldatawithusers", requiresAuth, isAdmin, adminController.getAllRentDataWithUsers);
router.get("/pendingrentadata", requiresAuth, isAdmin, adminController.PendingRentalData);
router.get("/latestrentadata", requiresAuth, isAdmin, adminController.getLatestRentDataWithUsers);

export default router;