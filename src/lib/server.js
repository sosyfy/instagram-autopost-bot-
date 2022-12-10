const express = require("express")
const app = express()
const v1routes = require( '#routes/v1')
//& routes
app.use('/', v1routes)
module.exports =  app 
