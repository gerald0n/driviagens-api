import { Router } from "express";

const passengersRoutes = Router()

passengersRoutes.post("/passenger")
passengersRoutes.get("passengers/travels") 

export default passengersRoutes