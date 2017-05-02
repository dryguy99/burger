// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var db = require('../models')


// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the burgers
  app.get("/", function(req, res) {
    console.log("3 : select all")
   db.Burgers.findAll({})
        .then(function(result) {
          let tmp = result.map((data) => data.dataValues).filter((data) => !data.devoured)
          console.log(tmp)
          let tmp2 = result.map((data) => data.dataValues).filter((data) => data.devoured)
          // console.log(result.getDataValue('burger_name'));
          res.render("home", { burgers: tmp, eaten : tmp2 });
        });
   
  });

  // POST route for saving a new burger.
  app.post("/", function(req, res) {

    var burger = req.body.burger_name;
    var devoured = false;
    console.log("1 "+ burger + " : " + devoured);
   
   db.Burgers.create({
      burger_name: burger,
      devoured: devoured,
    }).then( function(dbBurgers) {
      //console.log("2 "+dbBurgers.getDataValue('id') +" : " +dbBurgers.getDataValue('burger_name'));
      //var myburger = dbBurgers.getDataValue();
      console.log("dataValues", dbBurgers.dataValues);
      //res.render("home", {burgers: [dbBurgers.dataValues]});
      res.redirect("/");
    });
  });

  // DELETE route for deleting burgers. 
  // req.params.id
  app.delete("/:id", function(req, res) {
    console.log(req.params.id);

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
