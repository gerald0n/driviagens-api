import { Router } from "express";
import citiesRoutes from "./cities.routes.js";
import flightsRoutes from "./flights.routes.js";
import passengersRoutes from "./passengers.routes.js";
import travelsRoutes from "./travels.routes.js";

const routes = Router()

routes.use(citiesRoutes)
routes.use(flightsRoutes)
routes.use(passengersRoutes)
routes.use(travelsRoutes)

export default routes