const express = require('express');
const exphbs = require('express-handlebars');
const routes = require('./controllers/burgers_controllers.js')
const app = express();

const PORT = process.env.PORT || 8080;

app.listen(PORT, function(){
    console.log(`app is listening on port: ${PORT}`);
});

