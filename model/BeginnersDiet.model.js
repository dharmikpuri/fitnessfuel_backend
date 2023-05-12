const mongoose = require("mongoose")



const beginnersDietSchema = mongoose.Schema({
    title:{type:String, require:true},
    meal:{type:Array, require:true},
    ProtienGain:{type:Number, require:true},
    calories:{type:Number, require:true},
    carbs:{type:Number, require:true}
    
},{
    versionKey:false
})



const BeginnersDietModel = mongoose.model("beginnersDiet" ,beginnersDietSchema)

module.exports = {
    BeginnersDietModel
}
