const express = require("express")
const { ExpertDietModel } = require("../model/experDiet.model")



const expertDeitRouter = express.Router()


expertDeitRouter.get("/" , async(req,res) => {
      try {
        const data = await ExpertDietModel.find()
        res.send(data)
      } catch (error) {
        res.send({
            msg:error.messsage
        })
      }
})


module.exports= {
    expertDeitRouter 
}



