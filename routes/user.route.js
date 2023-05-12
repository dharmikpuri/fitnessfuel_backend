const express = require("express");
const { userValidator } = require("../middleware/uservalidator");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { UserModel } = require("../model/Usermodel");
const auth = require("../middleware/auth");
const userRouter = express.Router();

userRouter.post("/register", userValidator, async (req, res) => {
  const {age, name, email, password, gender, weight, height, exercise, diet } = req.body;
  const bmi = (weight / (height*0.304 * height*0.304));
  let result = "";
  if (bmi <= 18 && bmi > 0) {
    result = "Under weight";
  } else if (bmi <= 25 && bmi > 18) {
    result = "Normal Weight";
  } else  {
    result = "Over Weight";
  }
  console.log(req.body)
  try {
    bcrypt.hash(password, 5, async (err, hash) => {
      if (err) {
        res.send({
          error: err.message,
          msg: "unable to hash password",
        });
      } else {
        const data = new UserModel({
          email,
          password: hash,
          name,
          gender,
          weight,
          height,
          exercise,
          diet,
          age
        });
        await data.save();
        res.send({
          msg: "user created",
          BMI: bmi,
          result: result,
        });
      }
    });
  } catch (error) {
    res.send({
      msg: "unable to register",
      err: error.msg,
    });
  }
});

userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const data = await UserModel.findOne({ email });
    if (data) {
      const token = jwt.sign(
        { userID: data._id, owner: data.name },
        "fitnessfuel"
      );
      bcrypt.compare(password, data.password, (err, result) => {
        if (result) {
          res.send({
            msg: "user login successfully",
            token,
            name: data.name
            
          });
        } else {
          res.send({
            error: err,
          });
        }
      });
    } else {
      res.send({
        error: "user not found",
      });
    }
  } catch (error) {
    res.send({
      msg: "unable to Login please verify email and password",
      err: error.msg,
    });
  }
});

userRouter.get("/" , auth, async(req,res) => {
    console.log("find for" , req.body.userID)
        try {
            const data = await  UserModel.find({_id:req.body.userID})
            res.send({
                data
            })
        } catch (error) {
            res.send({
                msg:" you are not authorize users please login or signup",
                err:error.message
            })
        }
})

userRouter.patch("/update/:ID" , auth , async(req,res) => {
    const {ID} = req.params
     try {
        const data = await UserModel.findOne({_id:ID})
         if(req.body.userID != data._id){
            res.send({
                msg:"you are not authorize to do this action please select correct id"
            })
         }
         else{
            await UserModel.findByIdAndUpdate({_id:ID}, req.body)
            res.send({
                msg:"your plan  updated"
            })
         }
     } catch (error) {
        res.send({
            msg:"unable to update details of yous please check id"
        })
     }
})

//admin side -> delete remain
module.exports = {
  userRouter,
};
