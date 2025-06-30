    const cluster=require('cluster')
    const os=require('os')


    const numCPUs=os.cpus().length

    if(cluster.isMaster){
        

        for(i=0;i<numCPUs;i++){
            cluster.fork()
        }


        cluster.on('exit',(worker,code,signal)=>{
             console.log(`wokrer ${worker.process.pid} died`);
        })
    }else{
        console.log(process.pid,"is doing some background work");

        let sum=0
        for(let i=0;i<1e7;i++){
            sum+=i
        }


        console.log(process.pid,"completed the work:",sum);
        process.exit()
        
    }