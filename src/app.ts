require("dotenv").config();
import express from "express";
import mongoose from "mongoose";

import { routes } from "./routes";

const app = express();
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(
  MONGO_URI,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  (err) => (err ? console.error(err) : console.log("Database connected!"))
);

app.use(express.json());

app.use("/api", routes);

export { app };
