var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "class2",
  password: "class2",
  database: "class2"
});

var sql = 'SELECT * from news';

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Result: " + JSON.stringify(result));
      con.end();
    });
  });



