

process.on('message',(msg)=>{
    console.log('message from parrent:',msg);
    process.send('hello this msg from child')
})