// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var db = require("../models");
// grab the orm from the config
// (remember: connection.js -> orm.js -> route file)
// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the todos
  app.get("/", function(req, res) {
    db.Burger.findAll({}).then(function(results) {
      temp =JSON.stringify(results);
      temp2 = JSON.parse(temp);
      res.render("index", {burgers: temp2});
    })
  });

  app.get("/api/burger", function(req, res) {
    db.Burger.findAll({}).then(function(results) {
      let temp = Object.JSON(results);  
      console.log(temp);
      res.json(results)
    })
  });

  // POST route for saving a new todo. We can create a todo using the data on req.body
  app.post("/api/burger", function(req, res) {
    db.Burger.create({
      burger_name: req.body.name,
      devoured: false
    }).then(function(results) {
      // `results` here would be the newly created chirp
      res.end();
    });
  });

  // DELETE route for deleting todos. We can access the ID of the todo to delete in
  // req.params.id
  app.delete("/api/burger/:id", function(req, res) {
    db.Burger.destroy({where : {id: req.params.id}}).then(function(result) {
      if (result.affectedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    })
  });

  // PUT route for updating todos. We can access the updated todo in req.body
  app.put("/api/burger/:id", function(req, res) {
    db.Burger.update({
      devoured: req.body.devoured
    }, {
      where: {
        id: req.params.id
      }
    }).then(function(results) {
      if (results.affectedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });
  app.put("/api/reset", function(req, res) {
    db.Burger.update({
      devoured: false
    }, {where: {devoured: true}}).then(function(results) {
      if (results.affectedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });
};


