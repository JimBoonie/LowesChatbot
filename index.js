const express = require('express');
const path = require('path');

const app = express();
const port = 3000;
const entry = '/';
const static_root = './interface';

app.get(entry, function (req, res) {
    res.sendFile(path.join(__dirname + '/interface/index.html'));
});
app.use(express.static(static_root))
app.listen(port, () => console.log(`Listening on port ${port}!`))
