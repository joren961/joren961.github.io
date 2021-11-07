const express = require('express');
const app = express();
const path = require('path');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './index.html'));
});
let PORT = process.env.PORT || '3000'
app.set('port', PORT);

app.listen(PORT,() => {
    console.log('server live');
});