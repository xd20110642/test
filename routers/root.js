const express = require('express');

const router=express.Router()

const xd=require('../config/index')
router.get('/',(req,res,next) => {
  
    res.send(xd.rootURL)
})
const a=456;
module.exports=router