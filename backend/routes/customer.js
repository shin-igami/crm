// For customer adding , getting and deleting and updating
const express = require('express');
const router = express.Router();
const Customer = require('../models/Customer')
const auth = require('../middleware/auth')

router.post('/add',async(req,res)=>{
    const {Name,Number,Details,Progress} = req.body
    try {
        const customer = new Customer({
            Name,Number,Details,Progress
        })
        await customer.save()
        res.status(201).json({customer})
    } catch (error) {
        res.status(500).json({error})
    }
}
)

router.get('/get',async(req,res)=>{
    try {
        const customer = await Customer.find()
        res.status(200).json({customer})
    } catch (error) {
        res.status(500).json({error})
    }
}
)

router.delete('/delete/:id',async(req,res)=>{
    const id = req.params.id
    try {
        const customer = await Customer.findByIdAndDelete(id)
        res.status(200).json({customer})
    } catch (error) {
        res.status(500).json({error})
    }
}
)

router.put('/update/:id',async(req,res)=>{
    const id = req.params.id
    const {Name,Number,Details,Progress} = req.body
    try {
        const customer = await Customer
        .findByIdAndUpdate(id,{Name,Number,Details,Progress},{new:true})
        res.status(200).json({customer})
    } catch (error) {
        res.status(500).json({error})
    }
}
)

//get a single customer
router.get('/get/:id',async(req,res)=>{
    const id = req.params.id
    try {
        const customer = await
        Customer.findById(id)
        res.status(200).json({customer})
    } catch (error) {
        res.status(500).json({error})
    }
}
)

module.exports = router
