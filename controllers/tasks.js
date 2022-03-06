const Task = require('../models/task')
const statusCodes = require('http-status-codes')

const getAllTasks = async (req, res, next) => {
    try {
        const tasks = await Task.find({})
        res.status(statusCodes.OK).json({tasks})
    } catch (error) {
        console.log(error)
    }
}
const getTask = async (req, res, next) => {
    const {id} = req.params
    try {
        const task = await Task.findOne({_id: id})
        res.status(statusCodes.OK).json({task})
    } catch (error) {
        console.log(error)
    }
}
const createTask = async (req, res, next) => {
    try {
        const task = await Task.create(req.body)
        res.status(statusCodes.CREATED).json({task})
    } catch (error) {
        console.log(error)
    }
}
const updateTask = async (req, res, next) => {
    const {id} = req.params
    try {
        const task = await Task.findOneAndUpdate({_id: id}, req.body, {new:true})
        res.status(statusCodes.OK).json({task})
    } catch (error) {
        console.log(error)
    }
}
const deleteTask = async (req, res, next) => {
    const {id} = req.params
    try {
        const task = await Task.findOneAndDelete({_id: id})
        res.status(statusCodes.OK).send(`Task: ${task.name} has been deleted`)
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getAllTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask
}