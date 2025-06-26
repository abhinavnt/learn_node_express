const fs=require('fs')


fs.writeFile('output.txt',"i love you",(err)=>{
    console.log(err);
    
})