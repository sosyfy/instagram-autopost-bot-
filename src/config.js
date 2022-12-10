const  dotenv = require('dotenv')

dotenv.config()
 
module.exports = Object.freeze({
    env: process.env.NODE_ENV,
    isProduction: process.env.NODE_ENV === 'production',
    port: process.env.PORT,
    mongo: {
      uri: process.env.MONGO_URI,
    },
    cookie: process.env.COOKIE,
    userAgent: process.env.USER_AGENT,
    x_ig_app_id: process.env.X_IG_APP_ID,
    userName: process.env.IG_USERNAME,
    password: process.env.IG_PASSWORD
  }) 