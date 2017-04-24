var connection = require("./connection.js");

// Object Relational Mapper (ORM)

var orm = {
  insertOne: function(insertArray, CB) {
    var queryString = "INSERT INTO posts SET ?";
    connection.query(queryString, insertArray, function(err, result) {
      if (err) {
        console.log("my SQL error: " + err);
        CB(err);
      }
      console.log(result);
      CB(result);
    });
  },
  selectAll: function(col, table, CB) {
    var queryString = "SELECT ?? FROM ??";
    connection.query(queryString, [col, table], function(err, result) {
      if (err) {
        console.log("my SQL error: " + err);
        CB(err);
      }
      console.log(result);
      CB(result);
    });
  },
  updateOne: function(col, table, id, CB) {
    var queryString = "UPDATE ?? FROM ?? WHERE id = ?";
    connection.query(queryString, [col, table, id], function(err, result) {
      if (err) {
        console.log("my SQL error: " + err);
        CB(err);
      }
      console.log(result);
      CB(result);
    });
  }

};

module.exports = orm;
