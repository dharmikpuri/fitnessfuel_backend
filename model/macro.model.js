const mongoose = require("mongoose")



const macroSchema = mongoose.Schema({
    title:{type:String, require:true},
  
    protine:{type:Number, require:true},
    fat:{type:Number, require:true},
    carbs:{type:Number, require:true}
    
},{
    versionKey:false
})



const MacroModel = mongoose.model("macro" ,macroSchema)

module.exports = {
    MacroModel
}
