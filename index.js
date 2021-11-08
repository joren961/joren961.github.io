const express = require('express');
const app = express();

let PORT = process.env.PORT || '3000'
app.set('port', PORT);
app.use('/public', express.static(__dirname + '/public'));

app.listen(PORT,() => {
    console.log('server live');
});