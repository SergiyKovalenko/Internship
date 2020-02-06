const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer((req, res) => {
    let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);
    const ext = path.extname(filePath);
    if (!ext) {
        filePath += '.html';
    }
    let contentType = '';
    switch (ext) {
    case '.css':
        contentType = 'text/css';
        break;
    case '.js':
        contentType = 'text/javascript';
        break;
    default:
        contentType = 'text/html';
    }
    fs.readFile(filePath, (err, data) => {
        if (err) {
            throw err;
        }
        res.writeHead(200, {
            'Content-Type': contentType,
        });
        res.end(data);
    });
}).listen(3000, () => {
    console.log('Server has been started!');
});
