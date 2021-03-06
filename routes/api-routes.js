// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var db = require('../models');


// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the burgers
  app.get("/", function(req, res) {
    console.log("3 : select all")
   db.Burgers.findAll({})
        .then(function(result) {
          let tmp = result.map((data) => data.dataValues).filter((data) => !data.devoured);
          let tmp2 = result.map((data) => data.dataValues).filter((data) => data.devoured);
          res.render("home", { burgers: tmp, eaten : tmp2 });
        });
   
  });

  // POST route for saving a new burger.
  app.post("/", function(req, res) {

    var burger = req.body.burger_name;
    var devoured = false;
   
   db.Burgers.create({
      burger_name: burger,
      devoured: devoured,
    }).then( function(dbBurgers) {
      
      res.redirect("/");
    });
  });

  // DELETE route for deleting burgers. 
  // req.params.id
  app.delete("/:id", function(req, res) {

    db.Burgers.destroy({
      where: {
        id: req.params.id
      }
    }).then( function (burger) {
      res.redirect("/");
    });
    
  });

  // PUT route for updating burgers. 
  app.put("/:id", function(req, res) {
    var newBurgers = {
      burger_name: req.body.burger_name,
      devoured: req.body.devoured
    };

    db.Burgers.update(newBurgers, {
        where: {
        id: req.params.id
      }
    }).then( function (burger) {
      res.redirect("/");
    });
    
  });
};
