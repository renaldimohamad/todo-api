import express, {Request, Response, Router} from "express"
import dotenv from "dotenv"
import router from "./src/routes"
import db from "./src/libs/db"
import cors from "cors"

dotenv.config()

const app = express()
const port = process.env.PORT || 4000

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())
app.get("/", (req: express.Request, res: express.Response) => {
   res.send("Hello World!")
})

app.use(router)

app.listen(port, async () => {
   try {
      await db.$connect()
      console.log(`Example app listening on port ${port}`)
   } catch (error) {
      await db.$disconnect()
   }
})
