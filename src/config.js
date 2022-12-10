
const  path = require('path')
const  dotenv = require('dotenv')

dotenv.config()
 
module.exports = Object.freeze({
    env: process.env.NODE_ENV,
    isProduction: process.env.NODE_ENV === 'production',
    port: process.env.PORT,
    mongo: {
      uri: process.env.MONGO_URI,
    },
  })