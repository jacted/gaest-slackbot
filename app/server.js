'use strict'

// BASE SETUP
// ====================================================
var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var cors = require('cors')
var config = require('./config')
var loc = require('./data/locations')

// Cors
// ====================================================
app.use(cors())

// Setup bodyparser
// ====================================================
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Fetch locations
// ====================================================
loc.fetchLocations()

// Hook
// ====================================================
require('./routes/hook')(app)

// Start server
// ====================================================
var server = app.listen(config.port, function () {})

module.exports = server
