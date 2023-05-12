const mongoose = require("mongoose")

const expertDietSchema = mongoose.Schema({
    title:{type:String, require:true},
    meal:{type:Array, require:true},
    ProtienGain:{type:Number, require:true},
    calories:{type:Number, require:true},
    carbs:{type:Number, require:true}
    
},{
    versionKey:false
})

const ExpertDietModel = mongoose.model("expertDiet" ,expertDietSchema)

module.exports = {
    ExpertDietModel
}
