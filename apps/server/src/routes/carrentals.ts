import express from "express";
import * as CarRentalController from "../controllers/CarrentalController";
import { requiresAuth } from "../middleware/auth";

const router = express.Router();

router.get("/", requiresAuth, CarRentalController.getRentals);
router.get("/:rentalId", requiresAuth, CarRentalController.getRental);
router.post("/", requiresAuth, CarRentalController.createRental);
router.put("/:rentalId",  CarRentalController.updateRental);
router.delete("/:rentalId", requiresAuth, CarRentalController.deleteRental);

export default router;
