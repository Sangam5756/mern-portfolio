import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import dbconnect from "./config/db.config.js";
import portfolioRoute from "./routes/portfolio.route.js";

dotenv.config();
const app = express();
app.use(cors());

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/api/portfolio", portfolioRoute);

app.listen(PORT, () => {
  console.log(`server is listening on http://localhost:${PORT}`);
  dbconnect();
});
