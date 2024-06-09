import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import dbconnect from "./config/db.config.js";
import portfolioRoute from "./routes/portfolio.route.js";
import path, { dirname } from "path";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());

const __dirname = path.resolve();

app.use(express.json());

app.use("/api/portfolio", portfolioRoute);



app.use(express.static(path.join(__dirname, "/frontend/dist")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});



app.listen(PORT, () => {
  console.log(`server is listening on http://localhost:${PORT}`);
  dbconnect();
});
