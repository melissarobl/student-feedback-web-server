const express = require('express')  //import express library- 'require' means 'import'
const path = require('path')  //library used to connect pieces of locations on your computer
const bodyParser = require('body-parser')

const indexRouter = require('./routes/index.js')  //bringing in 'routes' file

const app = express()
//creates the web app server

// enable parsing of POST request body
app.use(bodyParser.urlencoded({ extended: false }))


const staticFileLocation = path.join(__dirname, 'public')  // all of our files are the public directory
app.use(express.static(staticFileLocation))  //telling web app to use this location

//tell the app where thew views (HTML files or templates) are
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs') //use handlebars to generate views

app.use('/', indexRouter) // all requests to the app will be passed to indexRouter

// start server running
// if told specific port, use it- else use 3000
const server = app.listen(process.env.PORT || 3000, function() {
    console.log('Server running on port', server.address().port)
})