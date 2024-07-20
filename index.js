import express, { json } from 'express'
import { config } from "dotenv"
config({path:'./env/secret.env'})
import { DBConnection } from './DB/connection.js'
import userRouter from './modules/user/Routesuser.js'
import RouterCategory from './modules/Category/Routes.js'


const app = express()
const port = process.env.port
const BaseURL =process.env.baseUrl

app.use(express.json())
DBConnection()

app.use(`${BaseURL}/use`,userRouter)
app.use(`${BaseURL}/categor`,RouterCategory)

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))