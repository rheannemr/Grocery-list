const db = require('../models');
const router = require('express').Router();

    router.post('/api/grocery-list', (req, res) => {
        // Create a Grocery List ingredient with the data available to us in req.body
        console.log(req.body);
        db.Ingredients.create(req.body).then((dbIngredients) => res.json(dbIngredients));
        console.log('hello from grocery-list-api-routes: ', req.body);
    });


    // Find all Grocery List ingredients and return them to the user with res.json
    router.get('/api/grocery-list', (req, res) => {
        db.Ingredients.findAll({}).then((dbIngredients) => res.json(dbIngredients));
    });

    router.get('/api/grocery-list/:id', (req, res) => {
        // Find one Grocery List ingredient with the id in req.params.id and return them to the user with res.json
        db.Ingredients.findOne({
            where: {
                id: req.params.id,
            },
        }).then((dbIngredients) => res.json(dbIngredients));
    });


    router.delete('/api/grocery-list/:id', (req, res) => {
        // Delete a Grocery List ingredient with the id available to us in req.params.id
        db.Ingredients.destroy({
            where: {
                id: req.params.id,
            },
        }).then((dbIngredients) => res.json(dbIngredients));
    });

    router.put('/api/grocery-list/:id', function (req, res) {
        
        
      });

module.exports = router;