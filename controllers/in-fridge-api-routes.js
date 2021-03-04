const path = require("path");
const db = require("../models");
const router = require('express').Router();


 // GET route for getting all of the in-fridge data
 router.get("/in-fridge", function (req, res) {
    db.Ingredient.findAll({})
         .then(function (dbIngredients) {
              res.json(dbIngredients);
         });
});
// POST route for creating grocery
router.post("/in-fridge", function (req, res) {
    console.log(req.body);
    db.Ingredients.create({
         groceriesFood: req.body.groceriesFood,
         groceriesQuantity: req.body.groceriesQuantity
    })
         .then(function (dbIngredients) {
              res.json(dbIngredients);
         });
});
// DELETE route for deleting grocery
router.delete("/in-fridge/:id", function (req, res) {
     db.Ingredients.destroy({where: {id: req.params.id}})
          .then(function (dbIngredients) {
               res.json(dbIngredients);
          });
 });
     // PUT route for updating grocery
     router.put("/in-fridge/:id", function (req, res) {          
          db.Ingredients.update(req.body, { where: { id: req.params.id }})
          .then(function (dbIngredients) {
              res.json(dbIngredients);
          });
      });
      
module.exports = router;