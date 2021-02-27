const express = require('express');

// const htmlRouter = require('./routes/html-routes.js');
// const authorRouter = require('./routes/author-api-routes.js');
const apiRouter = require('./routes/post-api-routes.js');

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 8080;

// Requiring our models for syncing
const db = require('./models');

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static('public'));

// Invoke routes
htmlRouter(app);
authorRouter(app);
apiRouter(app);

// Syncing our sequelize models and then starting our Express app
db.sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
});





// const express = require('express');
// const exphbs = require('express-handlebars');
// const routes = require('./routes/grocery_routes.js');
// const app = express();

// const PORT = process.env.PORT || 8080 ;

// app.use(express.static(__dirname + '/public/'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true}));


// app.listen(PORT, function(){
//     console.log(`app is listening on port: ${PORT}`);
// });

