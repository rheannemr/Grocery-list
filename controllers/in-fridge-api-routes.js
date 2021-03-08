const path = require("path");
const db = require("../models");
const router = require('express').Router();


 // GET route for getting all of the in-fridge data
 router.get("/api/in-fridge", function (req, res) {
    db.Ingredients.findAll({
         // where the inFridge is equal to 1 on mysql db
    })
         .then(function (dbIngredients) {
              res.json(dbIngredients);
         });
});
// POST route for creating grocery
router.post("/api/in-fridge", function (req, res) {
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
router.delete("/api/in-fridge/:id", function (req, res) {
     db.Ingredients.destroy({ where: { id: req.params.id } })
          .then(function (dbIngredients) {
               res.json(dbIngredients);
          });
 });
     // PUT route for updating grocery from not inFridge to yes inFridge
     router.put("/api/in-fridge/:id", function (req, res) {   
          // change the inFridge equal to 1       
          db.Ingredients.update(req.body, { where: { id: req.params.id }})
          .then(function (dbIngredients) {
              res.json(dbIngredients);
          });
      });
      
module.exports = router;