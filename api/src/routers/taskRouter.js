import express from "express";
import {
  deleteTasks,
  getTasks,
  insertTask,
  updateTask,
} from "../models/task/TaskModel.js";
const router = express.Router();

// workflow : CRUD
// C(create) => receive new task and store in the database
router.post("/", async (req, res, next) => {
  try {
    const result = await insertTask(req.body);

    // throw new Error("some test");

    res.json({ status: "success", message: "New task has been added" });
  } catch (error) {
    console.log(error);

    next(error);
  }
});

// R(Read) => read data from data base and return to the client
router.get("/", async (req, res) => {
  //database query to get all the task
  const data = await getTasks();
  res.json({
    status: "success",
    message: "Here are the available list",
    data,
  });
});

// U(Update) => update some information of existing data int he database and respond client accordingly
router.put("/", async (req, res) => {
  const { _id, type } = req.body;
  console.log(req.body);

  const result = await updateTask(_id, { type });
  console.log(result);

  if (result?._id) {
    res.json({ message: "The task has been updated", status: "success" });
  } else {
    res.json({ message: "Nothing updated", status: "success" });
  }
});

//D(Delete) => Delete data(s) from database and response client accordingly
router.delete("/", async (req, res) => {
 
  const result = await deleteTasks(req.body);

  console.log(result);

  if (result?.deletedCount) {
    res.json({
      status: "success",
      message: "The selected task has been delete",
    });
  } else {
    res.json({
      status: "success",
      message: "No thing to delete",
    });
  }
});

export default router;
