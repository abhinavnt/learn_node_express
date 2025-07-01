const express = require('express')

const app=express()

app.get('/:a/:b',(req,res)=>{
    const a = parseFloat(req.params.a)
    const b=parseFloat(req.params.b)
    res.send(a+b)
})


app.listen(5000,()=>{
    console.log("server is running");
    
})