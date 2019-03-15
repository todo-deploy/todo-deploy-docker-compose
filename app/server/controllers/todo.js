const toWireType = (todo, baseUrl) => {
  return {
    id: todo.id,
    title: todo.title,
    order: todo.order,
    completed: todo.completed,
    url: `http://${baseUrl}/${todo.id}`
  }
}

const Todo = require('../models/todo')

const findAll = async baseUrl => {
  let todos = await Todo.find().exec()
  return todos.map(todo => toWireType(todo,baseUrl))
}

const findById = async (id, baseUrl) => {
  let todo = await Todo.findOne({'id': id}).exec()
  return toWireType(todo, baseUrl)
}

const create = async (todo, baseUrl) => {
  todo.completed = false
  await Todo.create(todo)
  return toWireType(todo, baseUrl)
}

const update = async (id, patch, baseUrl) => {
  let todo = await Todo.findOneAndUpdate({id: id}, patch).exec()
  return toWireType(todo, baseUrl)
}

const deleteAll = () => Todo.deleteMany().exec()
const deleteById = id => Todo.deleteOne({id}).exec()

module.exports = {findAll, findById, create, update, deleteAll, deleteById}