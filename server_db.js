
const express = require('express');
const routesFactory = require('./routes')
const dbClient = require('./db/sql')()
const routes = routesFactory(dbClient)

var app = express();
const port = process.env.PORT || 8080

//Define Routes 
app.use('/', routes);

app.listen(port, () => {
    console.log(`Web Server Started up at port ${port}`);
});

module.exports = { app };

