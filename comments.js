// Create web server
var http = require('http');
var fs = require('fs');
var url = require('url');
var server = http.createServer(function (req, res) {
    var parsedUrl = url.parse(req.url, true);
    if (parsedUrl.pathname === '/comments') {

        fs.readFile('comments.json', 'utf8', function (err, data) {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'Failed to read comments' }));
                return;
            }
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(data);
        }
        );
    }
    else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Not found' }));
    }
});

// Start server
server.listen(3000, function () {
    console.log('Server is listening on port 3000');
});


// Sample comments.json file content
