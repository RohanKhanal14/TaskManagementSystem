const express = require ('express');
const { createTask, getTasks, updateTask, deleteTask, getTaskById } = require('../controllers/task.controller');

const taskRouter = express.Router();

taskRouter.get('/get', getTasks);
taskRouter.get('/get/:taskId', getTaskById);
taskRouter.post('/create', createTask);
taskRouter.put('/update/:taskId', updateTask);
taskRouter.delete('/delete/:taskId', deleteTask);

module.exports = taskRouter;