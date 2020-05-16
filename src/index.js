const express = require('express');
const engine = require('ejs-mate');
const path = require('path');

// Inicializar
const app = express();

// settings
app.engine('ejs', engine);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.json());

// Variables
app.set('port', 4000);

// Routes
app.use(require('./routes/'));

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Servidor inicia
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});