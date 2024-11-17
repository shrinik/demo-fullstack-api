const express = require('express')
const cors = require('cors')
const { v4: uuidv4 } = require('uuid')
const config = require('config')
const db = require('./db')

const app = express()

app.use(cors())
app.use(express.json())

const todos = []

app.get('/svc', async (req, res) => {
    const response = await db.insertDocument()
    res.send(response)
})

app.get('/svc/todo', async (req, res) => {
    try {
        const response = await db.getTodos()
        res.json({
            todos: response
        })
    } catch (error) {
        res.send("An error occurred")
    }
})

app.post('/svc/todo', async (req, res) => {
    const newTodo = {
        value: req.body.value,
        completed: false
    }
    try {
        const response = await db.addTodo(newTodo)
        newTodo["_id"] = response
        res.send(newTodo)
    } catch (error) {
        res.send("An error occurred")
    }    
})

app.listen(3000)