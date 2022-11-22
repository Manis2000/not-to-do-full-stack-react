import express from "express";
const app = express();
const PORT = 8000;

import morgan from "morgan";
import cors from "cors";
//middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

//db connection
import mongoConnect from "./src/config/dbConfig.js";
mongoConnect();

// api endpoints
import taskRouter from "./src/routers/taskRouter.js";
app.use("/api/v1/task", taskRouter);

app.use("*", (req, res) => {
  res.status(400).json({
    status: "error",
    message: "invalid request",
  });
});

app.use((err, req, res, next) => {
  res.status(500).json({
    status: "error",
    message: err.message,
  });
});

app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`Server running at http://localhost:${PORT}`);
});
