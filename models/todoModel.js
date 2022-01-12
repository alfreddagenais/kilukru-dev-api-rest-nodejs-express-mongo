const mongoose = require('mongoose')

const Todos = mongoose.model('Todos', {
  todo: {
    type: String,
  },
  time: {
    type: Date,
    default: Date.now,
  },
})

module.exports = { Todos }
