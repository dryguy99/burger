// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var db = require('../models')

// grab the orm from the config
// (remember: connection.js -> orm.js -> route file)


// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the burgers
  app.get("/api/burgers", function(req, res) {

   db.Burgers.findAll({})
        .then(function(result) {
          return res.json(result);
        });
   
  });

  // POST route for saving a new burger. We can create a burger using the data on req.body
  app.post("/api/burgers", function(req, res) {

    var burger = req.body.burger_name;
    var devoured = req.body.devoured;
    console.log(text);
   
   db.Burgers.create({
      burgers: burger,
      devoured: devoured,
    }).then( function(dbBurgers) {
      res.json(dbBurgers);
    });
  });

  // DELETE route for deleting burgers. We can access the ID of the burger to delete in
  // req.params.id
  app.delete("/api/burgers/:id", function(req, res) {
    

    db.Burgers.destroy({
      where: {
        id: req.params.id
      }
    }).then( function (burger) {
      res.json(burger);
    });
    
  });

  // PUT route for updating burgers. We can access the updated burger in req.body
  app.put("/api/burgers", function(req, res) {
    var newBurgers = {
      burger_name: req.body.burger_name,
      devoured: req.body.devoured
    };

    db.Burgers.update(newBurgers, {
        where: {
        id: req.body.id
      }
    }).then( function (burger) {
      res.json(burger);
    });
    
  });
};
