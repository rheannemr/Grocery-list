const db = require('../models');

module.exports = (app) => {
    app.post('/api/grocery-list', (req, res) => {
        // Create a Grocery List ingredient with the data available to us in req.body
        console.log(req.body);
        db.GroceryList.create(req.body).then((dbGroceryList) => res.json(dbGroceryList));
    });


    // Find all Grocery List ingredients and return them to the user with res.json
    app.get('/api/grocery-list', (req, res) => {
        db.GroceryList.findAll({}).then((dbGroceryList) => res.json(dbGroceryList));
    });

    app.get('/api/grocery-list/:id', (req, res) => {
        // Find one Grocery List ingredient with the id in req.params.id and return them to the user with res.json
        db.GroceryList.findOne({
            where: {
                id: req.params.id,
            },
        }).then((dbGroceryList) => res.json(dbGroceryList));
    });


    app.delete('/api/grocery-list/:id', (req, res) => {
        // Delete a Grocery List ingredient with the id available to us in req.params.id
        db.GroceryList.destroy({
            where: {
                id: req.params.id,
            },
        }).then((dbGroceryList) => res.json(dbGroceryList));
    });

    app.put('/api/grocery-list/:id', function (req, res) {
        
        
      })
};