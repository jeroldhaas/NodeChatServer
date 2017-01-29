var express = require('express')
var router = express.Router()

var Chat = require('../domain/chat')
var storage = require('node-persist')


router.get('/chat', function (req, res, next) {
    var options =  []
    storage.init(options).then(function() {
        storage.getItem('messages')
        .then(function(err, value) {
          var response = new JSON(value)
          res.send(response)
        })
    })
    //next()
})

router.post('/chat', function(req, data, next) {
    var options = []
    storage.init(options)
    .then(function() {
        storage.setItem('messages', data)
        res.send('')
    })
})