import express from "express";
import dbConnect from "./config/db.js";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import bookRouter from "./routes/bookRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;
app.use(express.json());
dbConnect();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  console.log("Working");
  res.send("API is working");
});

app.use("/api/books", bookRouter);

app.listen(PORT, () => {
  console.log(`Server is running  at PORT ${PORT}`);
});
