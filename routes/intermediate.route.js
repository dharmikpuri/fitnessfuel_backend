const express = require("express")
const { IntermediateExeModel } = require("../model/intermediate.model")

const intermediateRouter = express.Router()


intermediateRouter.get("/" , async(req,res) => {
      try {
        const data = await IntermediateExeModel.find()
        res.send(data)
      } catch (error) {
        res.send({
            msg:error.messsage
        })
      }
})


module.exports= {
    intermediateRouter
}



