// const http = require('http');
// // console.log(http);
// const myserver = http.createServer((req, res)=>{

//     res.write("welcome to node site")
//     res.end()
// })

// myserver.listen(4800,()=>{
    
// });

const http = require('http')


const myserver = http.createServer((req, res)=>{
// res.write('welcolme to node')
// res.write('<h1>welcome To Node Js</h1>')
res.write(`<div>
<h1>hello</h1>
<h2>hellow</h2></div>`)
res.end()
})
 
myserver.listen(4800,()=>{
    console.log('server is runnig');
})