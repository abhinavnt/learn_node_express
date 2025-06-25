const { parentPort, workerData } = require("worker_threads");

console.log("Worker thread: Started with data", workerData);

const result = workerData * 2;

parentPort.postMessage(result);
