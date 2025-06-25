const {fork} = require('child_process')

const child=fork('child.js')

child.on('message',(msg)=>{
    console.log('message from the child:',msg

    );
    
})

child.send('hello from parrent')