const mongoose = require("mongoose")

const intermediateDietSchema = mongoose.Schema({
    title:{type:String, require:true},
    meal:{type:Array, require:true},
    ProtienGain:{type:Number, require:true},
    calories:{type:Number, require:true},
    carbs:{type:Number, require:true}
    
},{
    versionKey:false
})

const IntermediateDietModel = mongoose.model("intermediateDiet" ,intermediateDietSchema)

module.exports = {
    IntermediateDietModel
}
