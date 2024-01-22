const http = require('http')
const path = require('path')
const fs = require('fs')
const port = 7000;



const myserver = http.createServer((req,res)=>{
    if(req.url==="/"){
        fs.readFile('./public/index.html',(error, html)=>{
            res.writeHead(210,{"Content-Type":"UTF-8"});
            res.end(html)
        })
    }
    else if(req.url==="/about"){
        fs.readFile('./public/about.html',(error,html)=>{
            res.writeHead(220,{"Content-Type":"UTF-8"});
            res.end(html)

        })
    }
    else if(req.url.match('\.css$')){
        var csspath=path.join(__dirname,'public',req.url);
        console.log(csspath);
        var redpath = fs.createReadStream(csspath,"utf-8");
        res.writeHead(200,{'Content-Type':"text/css"})
        redpath.pipe(res);
    }

    else if(req.url.match('\.js$')){
        var csspath=path.join(__dirname,'public',req.url);
        console.log(csspath);
        var redpath = fs.createReadStream(csspath,"utf-8");
        res.writeHead(200,{'Content-Type':"text/js"})
        redpath.pipe(res);
    }
    else if(req.url.match('\.jpg$')){
        var csspath=path.join(__dirname,'public',req.url);
        console.log(csspath);
        var redpath = fs.createReadStream(csspath,);
        res.writeHead(200,{'Content-Type':"text/jpg"})
        redpath.pipe(res);
    }
    else{
        fs.readFile('./public/errorpage.html',(error,html)=>{
            res.writeHead(230,{"Content-Type":"UTF-8"});
            res.end(html)
        })
    }

})

myserver.listen(port,()=>{
    console.log(`${port} server is running`);
})