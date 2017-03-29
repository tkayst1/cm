var express = require('express');
var app = express();
var options = {
    port: 8080
}

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.send('../public/index.html');
});

app.listen(options.port);