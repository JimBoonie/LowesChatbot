const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;
const static_root = './interface';

app.use(express.static(static_root))
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/interface/index.html'));
});
app.post('/submit-message', function(req, res) {
    res.send({ text: 'Hi there!'});
});

app.listen(port, () => console.log(`Listening on port ${port}!`))
