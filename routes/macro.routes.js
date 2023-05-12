const express = require("express")
const { MacroModel } = require("../model/macro.model")

const macroRouter = express.Router()


macroRouter.get("/" , async(req,res) => {
    const {food, qty} = req.query
    // console.log(food, qty)
      try {
        const data = await MacroModel.find({title:food})
        // console.log(data)
         res.send({
            protine:data[0].protine*qty,
            carbs:data[0].carbs*qty,
            fat:data[0].fat*qty
         })
      } catch (error) {
        res.send({
            err:error.message
        })
      }
} )


module.exports = {
    macroRouter
}