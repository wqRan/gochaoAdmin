const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/goChao-admin')

module.exports = mongoose