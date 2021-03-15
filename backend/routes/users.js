const router=require('express').Router()
const mongoose = require('mongoose')
let user=require('../models/user.model')

router.route('/').get((req,res)=>{
    user.find()
        .then(users=>res.json(users))
})
module.exports=router