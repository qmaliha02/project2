var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost:3306",
  user: "root",
  password: "wisegirl",
  database: "project2"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO items (name, description, image) VALUES ('', '', '')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});

con.connect(function(err) {
    if (err) throw err;
    var sql = "DELETE FROM items WHERE *";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Number of records deleted: " + result.affectedRows);
    });});

    con.connect(function(err) {
        if (err) throw err;
        var sql = "UPDATE items *";
        con.query(sql, function (err, result) {
          if (err) throw err;
          console.log(result.affectedRows + " record(s) updated");
        });
      });