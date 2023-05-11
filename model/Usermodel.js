const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    name:{type:String, require:true},
    email:{type:String, require:true},
    password:{type:String, require:true},
    gender:{type:String, require:true},
    weight:{type:Number, require:true},
    height:{type:Number, require:true},
    exercise:{type:Array, require:true},
    diet:{type:Array, require:true},
    age:{type:Number, require:true}
},{
    versionKey:false
})

const UserModel = mongoose.model("user" , userSchema)

module.exports = {
    UserModel
}
