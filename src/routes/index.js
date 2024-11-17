const todoRouter = require('./todo')

module.exports = function(app) {
    app.use('/svc/todo', todoRouter)
}

