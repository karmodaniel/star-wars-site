const express = require('express');
const app = express('path');

const PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + '/dist/star-wars-site'));

app.get('/*', (req, res) => {
    res.sendFile(__dirname + '/dist/star-wars-site/index.html');
});

app.listen(PORT, () => {
    console.log('Servidor iniciado na porta ' + PORT);
});