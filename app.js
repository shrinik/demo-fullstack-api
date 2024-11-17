const express = require('express')
const cors = require('cors')
const { v4: uuidv4 } = require('uuid')

const app = express()

app.use(cors())
app.use(express.json())

const todos = []

app.get('/svc', (req, res) => {
    res.send("Hello from Express.js")
})

app.get('/svc/todo', (req, res) => {
    res.json({
        todos: todos
    })
})

app.post('/svc/todo', (req, res) => {
    const newTodo = {
        id: uuidv4(),
        value: req.body.value,
        completed: false
    }
    todos.push(newTodo)
    res.send(newTodo)
})

app.listen(3000)