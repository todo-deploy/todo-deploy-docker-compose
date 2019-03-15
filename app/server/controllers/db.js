mongoose = require('mongoose')

mongoose.connect(process.env['DB'])
mongoose.connection.on('open', () => console.log('Connected to db'))

module.exports = mongoose
