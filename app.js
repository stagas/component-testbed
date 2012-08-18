var express = require('express')
var f = require('frequire')(__dirname)

var app = express()

f.require(['jquery', 'emitter', 'popover', 'tip', 'choice-popover'])

app.use(f.middleware('stagas-choice-popover/build/build'))
app.use(express.directory(__dirname + '/components'))
app.use(express.static(__dirname + '/components'))

app.listen(8080)
