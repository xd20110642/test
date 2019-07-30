const express = require('express');
const router = express.Router();
const axios=require('axios')
router.get('/', (req, res) => {
   let name=req.query.name;
   axios.get()
});

module.exports=router

//Run app, then load http://localhost:port in a browser to see the output.