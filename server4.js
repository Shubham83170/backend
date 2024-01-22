const http = require('http')
const path = require('path')
const fs = require('fs')
const port = 7000;



const myserver = http.createServer((req,res)=>{
    if(req.url==="/"){
        fs.readFile('./public/index.html',(error, html)=>{
            res.end(html)
        })
    }
    else if(req.url==="/about"){
        fs.readFile('./public/about.html',(error,html)=>{
            res.end(html)

        })
    }
    else{
        fs.readFile('./public/errorpage.html',(error,html)=>{
            res.end(html)
        })
    }

})

myserver.listen(port,()=>{
    console.log(`${port} server is running`);
})