const http = require('http');

const port = 3000;

const requestListener = (req, res) => {
    res.writeHead(200);
    res.end('Hello Node.js Server!\n');
};

const server = http.createServer(requestListener);

server.listen(port, () => {
    console.log(`server is listening on ${port}`);
});
