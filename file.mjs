import { createServer } from 'http';

const PORT = 3000;

let MyServer = createServer((req,res)=>{

const url = req.url

if (url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('This is the Home Page.');
} else if (url === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('This is the About Page.');
}
   else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
}
     
})

MyServer.listen(PORT , ()=>{
    console.log(`The server is running at http://localhost:${PORT}`)
})