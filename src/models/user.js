const  mongoose = require('mongoose')

const travelSchema = new mongoose.Schema(
    {
      email: {
        type: String,
        match: /^\S+@\S+\.\S+$/,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
      },

    },
    {
      timestamps: true,
    }
  )


class UserClass {
    constructor({ image }) {
     this.image = image
    }
  
    format() {
      return {
      
      }
    }
}

userSchema.loadClass(UserClass)

module.exports = mongoose.model('Travel', travelSchema)
