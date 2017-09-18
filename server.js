const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, './node_modules/jquery/dist')));
app.use(express.static(__dirname + './public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.status(200);
    res.sendFile(path.join(__dirname, './material design/index.html'));
});

app.listen(port, () => console.log(`Listening on port ${port}`));