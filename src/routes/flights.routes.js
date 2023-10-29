import { Router } from "express";

const flightsRoutes = Router()

flightsRoutes.post("/flights")
flightsRoutes.get("/flights")

export default flightsRoutes