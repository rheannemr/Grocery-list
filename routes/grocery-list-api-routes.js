const db = require('../models');
const router = require('express').Router();

    router.post('/api/grocery-list', (req, res) => {
        // Create a Grocery List ingredient with the data available to us in req.body
        console.log(req.body);
        db.GroceryList.create(req.body).then((dbGroceryList) => res.json(dbGroceryList));
        console.log('hello from grocery-list-api-routes: ', req.body);
    });


    // Find all Grocery List ingredients and return them to the user with res.json
    router.get('/api/grocery-list', (req, res) => {
        db.GroceryList.findAll({}).then((dbGroceryList) => res.json(dbGroceryList));
    });

    router.get('/api/grocery-list/:id', (req, res) => {
        // Find one Grocery List ingredient with the id in req.params.id and return them to the user with res.json
        db.GroceryList.findOne({
            where: {
                id: req.params.id,
            },
        }).then((dbGroceryList) => res.json(dbGroceryList));
    });


    router.delete('/api/grocery-list/:id', (req, res) => {
        // Delete a Grocery List ingredient with the id available to us in req.params.id
        db.GroceryList.destroy({
            where: {
                id: req.params.id,
            },
        }).then((dbGroceryList) => res.json(dbGroceryList));
    });

    router.put('/api/grocery-list/:id', function (req, res) {
        
        
      });

module.exports = router;