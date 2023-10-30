import { Router } from "express";
import validateSchema from "../middlewares/validateSchema.js";
import { travelSchema } from "../schemas/travelSchema.js";
import { travelController } from "../controllers/travel.controller.js";

const travelsRoutes = Router()

travelsRoutes.post("/travels", validateSchema(travelSchema), travelController.insertNewTravel)

export default travelsRoutes