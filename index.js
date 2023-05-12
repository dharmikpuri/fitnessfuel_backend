const express =  require("express")
const cors = require("cors")
const { connection } = require("./config/db")
const { userRouter } = require("./routes/user.route")
const { beginnersRouter } = require("./routes/beginnersExe.routes")
const { intermediateRouter } = require("./routes/intermediate.route")
const { expertRouter } = require("./routes/expert.route")
const { beginnersDeitRouter } = require("./routes/BeginnersDiet.routes")
const { intermediateDeitRouter } = require("./routes/intermediateDiet.route")
const { expertDeitRouter } = require("./routes/expertDiet.routes")
const { macroRouter } = require("./routes/macro.routes")
const app = express()

app.use(cors())
app.use(express.json())
app.use("/user" , userRouter)

app.use("/beginners" , beginnersRouter)
app.use("/intermediate" , intermediateRouter)
app.use("/expert" , expertRouter)


app.use("/beginnersdiet" , beginnersDeitRouter)
app.use("/intermediatediet", intermediateDeitRouter)
app.use("/expertdiet" , expertDeitRouter)

app.use("/macro" , macroRouter)
app.listen(8080, async() => {
    try {
       await connection 
       console.log("you are now connected to DB")
    } catch (error) {
        console.log(error)
    }
    console.log("server is running on port 8080")
})
