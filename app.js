// creats server
const express = require('express');

const app = express();

// our port
const PORT = 3000;

// routes module
const routes = require('./routes');
app.use(routes);

// static module
app.use(express.static('public'));

// server's adress
app.listen(PORT, ()=> {
    console.log(`server live at http://localhost:${PORT}`);
});
