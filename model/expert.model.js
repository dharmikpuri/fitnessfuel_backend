const mongoose = require("mongoose")

const expertExeSchema = mongoose.Schema({
    title:{type:String, require:true},
    Targetbodypart:{type:String, require:true},
    cardio:{type:String, require:true},
    exercise:{type:Array, require:true},
    image:{type:String},
    
},{
    versionKey:false
})

const ExpertExeModel = mongoose.model("expertExe" ,expertExeSchema)

module.exports = {
    ExpertExeModel
}
