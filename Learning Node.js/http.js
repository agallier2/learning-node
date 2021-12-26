const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url === '/') {
        res.end('I love vampire')
    }
    else if(req.url === '/about') {
        res.end('About coconut')
    }
    else{res.end(`<h1>Oopsies</h1>
    <a href="/">back home</a>`)}
})

server.listen(5000)