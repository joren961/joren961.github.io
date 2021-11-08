const express = require('express');
const app = express();

let PORT = process.env.PORT || '3000'
app.set('port', PORT);
app.use('/public', express.static(__dirname + '/public'));

server.get('/*', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
    res.sendFile(__dirname + '/public/style.css');
    res.sendFile(__dirname + '/public/main.js');
})

app.listen(PORT,() => {
    console.log('server live');
});