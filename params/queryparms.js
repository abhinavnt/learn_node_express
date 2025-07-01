
const express=require('express')

const app=express()


app.get('/',(req,res)=>{
    let a= parseFloat(req.query.a) 
    let b=parseFloat(req.query.b) 
    console.log(a+b,"sum");
    res.send(a+b)
})



app.listen(3000,()=>{
    console.log("server runnning");
    
})