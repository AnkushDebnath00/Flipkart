import express from "express";
import Connection from "./database/db.js";
import dotenv from "dotenv";
import defaultData from "./default.js";
import router from "./routes/route.js";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();

dotenv.config();
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
Connection(username, password);

defaultData();

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", router);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Running on PORT ${PORT}`);
});
