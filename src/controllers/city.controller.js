import httpStatus from "http-status"
import { cityService } from "../services/cityServices.js"

async function insertCity(req, res) {
  
  const { name } = req.body

  const { rows: [id] } = await cityService.addCity(name)

  res.status(httpStatus.CREATED).send({...id, name})
}

export const cityController = { insertCity }