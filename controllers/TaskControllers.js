const mongoose = require("mongoose");
const Task = require("../models/task");

const getTasks = async (req, res) => {
  await Task.find()
    .then((tasks) => {
      res.status(200).json({
        message: "Task fetched successfully",
        data: tasks,
      });
    })
    .catch((err) => {
      res.status(500).json({
        err: err.message,
      });
    });
};

const addTasks = async (req, res) => {
  await Task.create({
    title: "HardCoded",
    isCompleted: false,
    dueDate: new Date(),
    priority: "Low"
  }).then((data) => {
    res.status(201).json({
        message: "Data added successfully",
        data: data
    })
  }).catch((err) => {
    res.status(500).json({
        err: err.message
    });
  })
};

module.exports = { getTasks, addTasks };
