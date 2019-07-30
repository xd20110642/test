const express = require('express');

const router=express.Router()

const xd=require('../config/index')
router.get('/',(req,res,next) => {
  
    res.send(xd.rootURL)
})
const a=123;
module.exports=router