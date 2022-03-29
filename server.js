require('./services/mongoose');
const cors = require('cors');
const express = require('express');
const routes = require('./routes');
const app = express();
const port = 4001;

app.use(express.json());
app.use(cors())
app.use(routes);

app.listen(port, ()=>{
    console.log(`Server listening on port ${port}`);
});



// Dados de 01/09/2021