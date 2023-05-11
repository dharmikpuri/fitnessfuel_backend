const express = require("express")
const { BeginnersExeModel } = require("../model/beginnersExe.model")
const beginnersRouter = express.Router()


beginnersRouter.get("/" , async(req,res) => {
      try {
        const data = await BeginnersExeModel.find()
        res.send(data)
      } catch (error) {
        res.send({
            msg:error.messsage
        })
      }
})


module.exports= {
    beginnersRouter
}



