const express = require("express")
const { BeginnersDietModel } = require("../model/BeginnersDiet.model")

const beginnersDeitRouter = express.Router()


beginnersDeitRouter.get("/" , async(req,res) => {
      try {
        const data = await BeginnersDietModel.find()
        res.send(data)
      } catch (error) {
        res.send({
            msg:error.messsage
        })
      }
})


module.exports= {
    beginnersDeitRouter
}



