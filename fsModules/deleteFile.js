const fs=require('fs')


fs.unlink('delete.txt',(err)=>{
    console.log(err);
})