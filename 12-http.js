const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.write('welcome to our home page');
    }
    if(req.url === '/about'){
    res.write('here is our short history');
    }
res.end(`<h1>Ooops!</h1>
<p>we cant seem to find the page you are looking for</p>
<a href="/">back home</a>
`)
})

server.listen(5000)