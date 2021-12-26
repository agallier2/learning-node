const {readFileSync, writeFileSync} = require('fs')

console.log('start')
const first = readFileSync('./content/first','utf8');
const second = readFileSync('./content/second','utf8');

console.log(first, second)

//a flag appends
//default: override
writeFileSync('./content/result-sync.txt',
    `Here is the result: ${first}, ${second}`, {flag: 'a'})

console.log('done with this task')
console.log('starting the next one')