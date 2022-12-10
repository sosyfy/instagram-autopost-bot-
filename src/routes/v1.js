const express = require('express')
const { post } = require( '#controllers/post')
const { scrapper } = require( '#controllers/scrapper')

const router = express.Router()

router
    .route('/post')
    .get(post)

router 
    .route('/scrap')
    .get(scrapper)


module.exports = router