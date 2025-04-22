const fs=require('fs')

const data=fs.readFileSync('test.csv').toString().split('\n').map(e=>e.trim()).map(e=>e.split(',').map(e => e.trim()))

console.log(data);
