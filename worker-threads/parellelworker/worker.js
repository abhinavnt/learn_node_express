const {parentPort,workerData}=require('worker_threads')

let count=1
let limit=10


const interval= setInterval(() => {
    parentPort.postMessage({
        name:workerData.name,
        count
    })


    if(count==limit){
        clearInterval(interval)
        process.exit(0)
    }
count++

}, 1000);