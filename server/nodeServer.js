const http= require('http')


const port=3000


const server=http.createServer((req,res)=>{
    // res.statusCode=200
    // res.write("server is working")
    if(req.url=="/"){
        res.end("home page")
    }else{

        res.end("404 found")
    }
})

server.listen(port,()=>{
    console.log("server is runnign");
    
})