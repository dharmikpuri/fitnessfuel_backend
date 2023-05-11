const mongoose = require("mongoose")

const intermediateExeSchema = mongoose.Schema({
    title:{type:String, require:true},
    Targetbodypart:{type:String, require:true},
    cardio:{type:String, require:true},
    exercise:{type:Array, require:true},
    image:{type:String},
    
},{
    versionKey:false
})

const IntermediateExeModel = mongoose.model("intermediateExe" ,intermediateExeSchema)

module.exports = {
    IntermediateExeModel
}
