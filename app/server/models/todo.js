mongoose = require('../controllers/db')

const autoIncrement = require('mongoose-auto-increment')
autoIncrement.initialize(mongoose.connection)

const todoSchema = new mongoose.Schema({
  order: Number,
  title: String,
  completed: Boolean,
})

todoSchema.plugin(autoIncrement.plugin, {
  model: 'Todo',
  field: 'id'
})

module.exports = mongoose.model('Todo', todoSchema)
