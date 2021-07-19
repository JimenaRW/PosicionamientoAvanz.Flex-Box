const express = require('express');
const app = express();
const path = require('path');
let puerto = 3030;

app.use(express.static('public'));

app.get('', (req,res) => res.sendFile(path.join(__dirname, 'views', 'home.html')));

app.listen(puerto, () => console.log('Servidor corriendo en http://localhost:' + puerto));