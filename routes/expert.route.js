const express = require("express")
const { ExpertExeModel } = require("../model/expert.model")

const expertRouter = express.Router()


expertRouter.get("/" , async(req,res) => {
      try {
        const data = await ExpertExeModel.find()
        res.send(data)
      } catch (error) {
        res.send({
            msg:error.messsage
        })
      }
})


module.exports= {
    expertRouter
}



