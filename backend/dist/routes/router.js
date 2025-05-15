import { GetModelController } from "../controllers/model.controller.js";
import express from "express";
export const router = express.Router();
router.get('/', (req, res) => {
});
router.get('models', GetModelController);
