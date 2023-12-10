import  express  from "express";
import cors from "cors";
import PesRoute from "./routes/PesRouter.js"
import KapRoute from "./routes/KapRouter.js"
import KerRoute from "./routes/KerRouter.js"

const app = express();
app.use(cors());
app.use(express.json());
app.use(PesRoute);
app.use(KapRoute);
app.use(KerRoute);

app.listen(3000, ()=> console.log('server running'));