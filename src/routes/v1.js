const express = require('express')
const { post } = require( '#controllers/auth')
const { scrapper } = require( '#controllers/auth')

const router = express.Router()

router
    .route('/')
    .get(post)

router 
    .route('/scrap')
    .get(scrapper)


module.exports = router