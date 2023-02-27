// store all functions for handling todos operations

const createError = require('http-errors');


let todos = []

let idNo = 0



exports.index = function (req, res) {
    // res.send({
    //     key: 'this is key value'
    // })
    res.send(todos)
}

exports.create = function (req, res, next) {
    if (!req.body.name) {
        return (next(createError(400, "Name is required.")))
    }
    todos.push({
        id: idNo,
        name: req.body.name,
    })
    idNo++
    res.send({
        result: true
    })
}

exports.show = function (req, res, next) {
    const todo = todos.find(todo => todo.id === parseInt(req.params.id))
    if (!todo) {
        return (next(createError(404, "Todo not found.")))
    }
    res.send(todo)
}

exports.delete = function (req, res, next) {
    const todo = todos.find(todo => todo.id === parseInt(req.params.id))
    if (!todo) {
        return (next(createError(404, "Todo not found.")))
    }
    todos = todos.filter(todo => todo.id !== parseInt(req.params.id))
    res.send({
        result: true
    })
}

exports.update = function (req, res, next) {
    if (!req.body.name) {
        return (next(createError(400, "Name is required.")))
    }

    const todo = todos.find(todo => todo.id === parseInt(req.params.id))

    if (!todo) {
        return (next(createError(404, "Todo not found.")))
    }

    todos = todos.map(todo => {
        if (todo.id === parseInt(req.params.id)) {
            todo.name = req.body.name
        }
        return todo
    })

    // todo.name = req.body.name
    res.send({
        result: true
    })
}









