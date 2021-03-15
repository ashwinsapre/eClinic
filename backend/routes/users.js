const router=require('express').Router()
const mongoose = require('mongoose')
let User=require('../models/user.model')

router.route('/').get((req,res)=>{
    User.find()
        .then(users=>res.json(users))
        .catch(err=>res.status(400).json(err))
})
router.route('/add').post((req,res)=>{
    const un=req.body.username
    const a=req.body.age

    const newuser=new User({"username":un, "age":a})
    newuser.save()
        .then(res.json('New user added!'))
        .catch(err=>res.status(400).json(err))
})
module.exports=router