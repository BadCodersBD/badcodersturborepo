import express from "express";
import { isAdmin } from "../middleware/isAdmin";
import { requiresAuth } from "../middleware/auth";
import * as adminController from "../controllers/adminController";

const router = express.Router();

router.get("/alldata", requiresAuth, isAdmin, adminController.getAllData);


export default router;