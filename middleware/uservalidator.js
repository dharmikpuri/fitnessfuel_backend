const mongoose = require("mongoose")
const { UserModel } = require("../model/Usermodel")





async function userValidator(req,res,next){

    let data= await UserModel.find({$or: [{"name" : req.body.username}, {"email" : req.body.email}]})
    if(data.length>0){
        res.status(400).send({
            error:"User already exist"
        })
    }else{
        next()
    }

   
}


module.exports={userValidator}