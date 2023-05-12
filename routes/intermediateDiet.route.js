const express = require("express")
const { IntermediateDietModel } = require("../model/intermedieatDiet.model")


const intermediateDeitRouter = express.Router()


intermediateDeitRouter.get("/" , async(req,res) => {
      try {
        const data = await IntermediateDietModel.find()
        res.send(data)
      } catch (error) {
        res.send({
            msg:error.messsage
        })
      }
})


module.exports= {
    intermediateDeitRouter
}



