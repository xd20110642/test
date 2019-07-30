const express = require('express');
const app = express();
const root=require('./routers/root')
app.set('port', 4000);
app.set('rootURL','http://www.baidu.com')
app.use('/',root);
console.log("12312312312")
app.listen(app.get('port'), (req,res,) => {
    console.log('Example app listening on port port!');
});

