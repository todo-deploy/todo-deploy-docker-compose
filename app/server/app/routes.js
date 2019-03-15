module.exports = app => {

  const bodyParser = require('body-parser')
  cors = require('cors')

  app.use(cors())
  app.use(bodyParser.json())

  let controller = require('../controllers/todo')

  app.get('/api/', async (req,res) => {
    let todos = await controller.findAll(req.get, 'host')
    return res.json(todos)
  })

  app.get('/api/:id', async (req,res) => {
    let todo = await controller.findById(req.params['id'], req.get('host'))
    return res.json(todo)
  })

  app.post('/api/', async (req,res) => {
    let todo = await controller.create(req.body, req.get('host'))
    return res.json(todo)
  })

  app.patch('/api/:id', async (req, res) => {
    let todo = await controller.update(req.params['id'], req.body, req.get('host'))
    return res.json(todo)
  })

  app.delete('/api/', async (req, res) => {
    await controller.deleteAll()
    res.status(204).end()
  })

  app.delete('/api/:id', async (req, res) => {
    await controller.deleteById(req.params['id'])
    res.status(204).end()
  })
}