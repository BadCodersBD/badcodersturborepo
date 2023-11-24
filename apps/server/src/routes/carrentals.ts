import express from "express";
import * as CarRentalController from "../controllers/CarrentalController";
import { requiresAuth } from "../middleware/auth";

const router = express.Router();

router.get("/rentalbyuser/:userId", requiresAuth, CarRentalController.getRentalsByUserId);
router.get("/rentalbyid/:rentalId", requiresAuth, CarRentalController.getRentalByrentalid);
router.post("/createCarRental", requiresAuth, CarRentalController.createRental);
router.put("/updaterental/:rentalId", requiresAuth, CarRentalController.updateRental);
router.delete("/delete/:rentalId", requiresAuth, CarRentalController.deleteRental);


export default router;
