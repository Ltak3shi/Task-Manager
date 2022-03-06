const Task = require('../models/task')
const {StatusCodes} = require('http-status-codes')
const CustomAPIError = require('../errors/custom-error')

const getAllTasks = async (req, res, next) => {
    try {
        const tasks = await Task.find({})
        res.status(StatusCodes.OK).json({tasks})
    } catch (error) {
        console.log(error)
    }
}
const getTask = async (req, res, next) => {
    const {id} = req.params
    try {
        const task = await Task.findOne({_id: id})
        if(!task){
            throw new CustomAPIError(`id: ${id} does not exist`, StatusCodes.NOT_FOUND)
        }
        res.status(StatusCodes.OK).json({task})
    } catch (error) {
        next(error)
    }
}
const createTask = async (req, res, next) => {
    try {
        if(!req.body.name){
            throw new CustomAPIError(`Please provide a name`, StatusCodes.BAD_REQUEST)
        }
        const task = await Task.create(req.body)
        res.status(StatusCodes.CREATED).json({task})
    } catch (error) {
        next(error)
    }
}
const updateTask = async (req, res, next) => {
    const {id} = req.params
    try {
        const task = await Task.findOneAndUpdate({_id: id}, req.body, {new:true})
        if(!task){
            throw new CustomAPIError(`id: ${id} does not exist`, StatusCodes.NOT_FOUND)
        }
        res.status(StatusCodes.OK).json({task})
    } catch (error) {
        next(error)
    }
}
const deleteTask = async (req, res, next) => {
    const {id} = req.params
    try {
        const task = await Task.findOneAndDelete({_id: id})
        if(!task){
            throw new CustomAPIError(`id: ${id} does not exist`, StatusCodes.NOT_FOUND)
        }
        res.status(StatusCodes.OK).send(`Task: ${task.name} has been deleted`)
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getAllTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask
}