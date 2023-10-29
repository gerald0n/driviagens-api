import express from 'express'
import "express-async-errors"
import cors from "cors";
import dotenv from 'dotenv'
import routes from './routes/index.routes.js';
import handleErrorMiddleware from './middlewares/validateErrors.js';

dotenv.config()

const app = express()

app.use(express.json())
app.use(cors())
app.use(routes)
app.use(handleErrorMiddleware)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Servidor executando na porta ${PORT}`))
