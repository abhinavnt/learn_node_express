const {Worker}=require('worker_threads')

console.log('Main thread: Starting...');

const worker = new Worker('./worker.js',{
    workerData:10,
})


worker.on('message',(result)=>{
    console.log('Main thread: Received from worker:', result);
})

worker.on('error',(err)=>{
    console.log('worker error',err);
    
})