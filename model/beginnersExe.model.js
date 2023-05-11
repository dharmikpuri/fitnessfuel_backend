const mongoose = require("mongoose")

const beginnersExeSchema = mongoose.Schema({
    title:{type:String, require:true},


    Targetbodypart:{type:String, require:true},
    cardio:{type:String, require:true},

    
    exercise:{type:Array, require:true},
    image:{type:String},
    
},{
    versionKey:false
})

const BeginnersExeModel = mongoose.model("beginnersExe" ,beginnersExeSchema)

module.exports = {
    BeginnersExeModel
}
