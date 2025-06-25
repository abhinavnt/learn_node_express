const { Worker } = require("worker_threads");

const workerA = new Worker("./worker.js", {
  workerData: { name: "A" },
});

const workerB = new Worker("./worker.js", {
  workerData: { name: "B" },
});

workerA.on("message", (msg) => {
  console.log(`Worker ${msg.name}: ${msg.count}`);
});

workerB.on("message", (msg) => {
  console.log(`Worker ${msg.name}: ${msg.count}`);
});

// Listen for exit events
workerA.on("exit", () => {
  console.log("Worker A exited");
});
workerB.on("exit", () => {
  console.log("Worker B exited");
});
