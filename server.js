const express = require('express');
const exphbs = require('express-handlebars');
const routes = require('./routes/grocery_routes.js');
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + '/public/'));
app.use(express.json());
app.use(express.urlencoded({ extended: true}));


app.listen(PORT, function(){
    console.log(`app is listening on port: ${PORT}`);
});

