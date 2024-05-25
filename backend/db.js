const mongoose = require('mongoose')
const mongoURI = "mongodb+srv://rohanranchi25:Mf3itSBxNtjtkjRq@cluster0.se5tyeh.mongodb.net/inotebook"

const connectToMongo = () => {
    mongoose.connect(mongoURI)
    console.log("Success : Connected to Mongo")
}

module.exports = connectToMongo