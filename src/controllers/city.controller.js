import { cityService } from "../services/cityServices.js"

async function insertCity(req, res) {
  
  const { name } = req.body

  const { rows: [id] } = await cityService.addCity(name)

  res.status(201).send({...id, name})
}

export const cityController = { insertCity }