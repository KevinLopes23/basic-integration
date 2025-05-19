import express from "express";
import createUserController from "../controllers/createUserController.js";

const router = express.Router();


router.post("/users", createUserController);

export default router;
