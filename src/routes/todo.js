const { Router } = require('express')
const db = require('../db')

const todoRouter = new Router()

// Put route handlers here
todoRouter.get('/', async (req, res) => {
    try {
        const response = await db.getTodos()
        res.json({
            todos: response
        })
    } catch (error) {
        console.log(error);        
        res.send("An error occurred")
    }
})

todoRouter.post('/', async (req, res) => {
    const newTodo = {
        value: req.body.value,
        completed: false
    }
    try {
        const response = await db.addTodo(newTodo)
        newTodo["_id"] = response
        res.send(newTodo)
    } catch (error) {
        console.log(error);        
        res.send("An error occurred")
    }    
})

module.exports = todoRouter