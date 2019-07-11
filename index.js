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
    var data = {
        text: 'Hi there!',
        products: [
            { id: 0, title: 'Samsung 4.5-cu ft High Efficiency Stackable Front-Load Washer (Merlot) ENERGY STAR', src: 'https://mobileimages.lowes.com/product/converted/887276/887276250946lg.jpg', price: '$649.00'}, 
            { id: 1, title: 'Samsung 4.5-cu ft High Efficiency Stackable Front-Load Washer (Merlot) ENERGY STAR', src: 'https://mobileimages.lowes.com/product/converted/887276/887276250946lg.jpg', price: '$649.00'}, 
            { id: 2, title: 'Samsung 4.5-cu ft High Efficiency Stackable Front-Load Washer (Merlot) ENERGY STAR', src: 'https://mobileimages.lowes.com/product/converted/887276/887276250946lg.jpg', price: '$649.00'}, 
            { id: 3, title: 'Samsung 4.5-cu ft High Efficiency Stackable Front-Load Washer (Merlot) ENERGY STAR', src: 'https://mobileimages.lowes.com/product/converted/887276/887276250946lg.jpg', price: '$649.00'}, 
            { id: 4, title: 'Samsung 4.5-cu ft High Efficiency Stackable Front-Load Washer (Merlot) ENERGY STAR', src: 'https://mobileimages.lowes.com/product/converted/887276/887276250946lg.jpg', price: '$649.00'}, 
            { id: 5, title: 'Samsung 4.5-cu ft High Efficiency Stackable Front-Load Washer (Merlot) ENERGY STAR', src: 'https://mobileimages.lowes.com/product/converted/887276/887276250946lg.jpg', price: '$649.00'}, 
            { id: 6, title: 'Samsung 4.5-cu ft High Efficiency Stackable Front-Load Washer (Merlot) ENERGY STAR', src: 'https://mobileimages.lowes.com/product/converted/887276/887276250946lg.jpg', price: '$649.00'}
        ]
    }
    res.send(data);
});

app.listen(port, () => console.log(`Listening on port ${port}!`))
