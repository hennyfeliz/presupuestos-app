import express from 'express'
import path from 'path'
import { fileURLToPath } from "url";
import "./database.js";
import indexRoutes from './routes/index.js'
import ejs from 'ejs'

const PORT = 3000
const app = express()


/* inizialisations */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


/* settings */
app.set("FRONTEND", path.join(__dirname, "../FRONTEND"));

/* routes */
app.use(indexRoutes)
app.set('view engine', 'html');
app.engine('html', ejs.renderFile);


app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
})
