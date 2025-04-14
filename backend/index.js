import express from "express";
import cors from "cors";
import RentalRoute from "./routes/RentalRoute.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(RentalRoute);

app.listen(5000, () => console.log('Server up and running...'));