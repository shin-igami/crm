//middleware 

// Path: backend/middleware/auth.js
const jwt = require('jsonwebtoken')

module.exports = function(req,res,next){
    const token = req.header('token')
    if(!token){
        return res.status(403).json({error:"Authorization Denied"})
    }
    try {
        const decoded = jwt.verify(token,"randomString")
        req.user = decoded.user
        next()
    } catch (error) {
        res.status(500).json({error:"Token is not valid"})
    }
}
