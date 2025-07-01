const eventEmitter=require('events')

const emitter=new eventEmitter()

emitter.on('greet',(age,name)=>{
     console.log(`hi ${name} your age is ${age} good morning`);
})


emitter.emit('greet',19,"Abhinav")