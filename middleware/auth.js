const jwt = require('jsonwebtoken');

const auth = async(req, res , next) => {
    const token = req.headers.authorization
     try {
        console.log(token)
       const decoded = jwt.verify(token.split(" ")[1], 'fitnessfuel');
       console.log(decoded)
       if(decoded){
          req.body.userID = decoded.userID
          req.body.owner = decoded.owner
          next()
       }
     } catch (error) { 
        res.send({
            err:error.message,
            msg:"auth not pass"
        })
     }
}

module.exports = (
    auth
)