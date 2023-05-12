const mongose = require("mongoose")
require("dotenv").config()
const connection = mongose.connect(process.env.mongoDB)




module.exports = {
    connection
}



