const mongoose = require('mongoose')

const initDb  = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL, {
            dbName: process.env.MONGODB_NAME,
            autoCreate: true, 
            autoIndex: true
        })
        console.log("DB server connected successfully.")
    } catch(exception) {
        console.log("Error connectin db...", exception)
        process.exit(1)
    }
}

initDb();