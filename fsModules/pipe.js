const fs=require('fs')


const readble=fs.createReadStream('test.txt')

const writable=fs.createWriteStream('output.txt')

readble.pipe(writable)