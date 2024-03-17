//login routes

// Path: backend/Routes/auth.js

const express = require('express')
const router = express.Router()
const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const auth = require('../middleware/auth')

router.post('/register',async(req,res)=>{
    const {Name,UserName,Password} = req.body
    try {
        let user = await User
        .findOne({UserName})
        if(user){
            return res.status(400).json({error:"User already exists"})
        }
        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(Password,salt)
        user = new User({
            Name,UserName,Password:hash
        })
        await user.save()
        res.status(201).json({user})
    } catch (error) {
        res.status(500).json({error})
    }
}
)

router.post('/login',async(req,res)=>{
    const {UserName,Password} = req.body
    try {
        let user = await User.findOne({UserName})
        if(!user){
            return res.status(400).json({error:"Invalid Credentials"})
        }
        const isMatch = await bcrypt.compare(Password,user.Password)
        if(!isMatch){
            return res.status(400).json({error:"Invalid Credentials"})
        }
        const payload = {
            user:{
                id:user.id
            }
        }
        jwt.sign(payload,"randomString",{expiresIn:10000},(err,token)=>{
            if(err) throw err
            res.status(200).json({token})
        })
    } catch (error) {
        res.status(500).json({error})
    }
}
)

module.exports = router