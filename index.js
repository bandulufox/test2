const express = require('express');
const router = require('./routes/routes');
const dataBase = require('./db/connect');   
const backend = express();


//ROOT ROUTE
backend.get('/' , function(req, res)
{
    res.redirect('/api/project');
});


backend.use('/api/', router);

backend.listen(3001, function()
{
    console.log("Server started");
});