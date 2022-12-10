const mongoose = require('mongoose')

exports.connect = async function (uri) {
    await mongoose.connect(uri, {
        //& must add in order to not get any error masseges:
        useUnifiedTopology: true,
        useNewUrlParser: true,
        serverSelectionTimeoutMS: 5000,
        autoIndex: false, // Don't build indexes
        maxPoolSize: 10, // Maintain up to 10 socket connections
        serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
        socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
        family: 4 // Use IPv4, skip trying IPv6 
    }).then(
        console.log("DB CONNECTED SUCCESS")

    ).catch(error => {
        console.log("DB CONNECTION FAILED ", error)
        process.exit(1)
    })

    return true
}


exports.disconnect = async function () {
    await mongoose.disconnect()
}