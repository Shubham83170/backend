const http = require('http')
const path = require('path')
const fs = require('fs')



const myserver= http.createServer((req,res)=>{
    // console.log(req);

    if(req.url==="/"){
        fs.readFile('./public/index.html',(ero, html)=>{
           res.end(html)

        })
    }
    else if (req.url==="/about"){
        fs.readFile('./public/about.html',(ero,html)=>{
            res.end(html)
        })
    }
    else{
        fs.readFile('./public/errorpage.html',(ero,html)=>{
            res.end(html)

        })
    }

})

myserver.listen(4500,()=>{
    console.log('server is runing...');
})