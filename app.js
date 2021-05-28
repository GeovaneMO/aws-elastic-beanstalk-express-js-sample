const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('vamo ver oque eu vou aprender aqui'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
