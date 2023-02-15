const mariadb = require("mariadb/callback");

function main() {
   let conn;

   try {
      // Establish Connection
      conn = mariadb.createConnection({
         host: "localhost",
         port: 3306,
         user: "class2",
         password: "class2",
         database: "class2",
      });
      conn.query(
         "SELECT * from news",
         (err,res,meta) => {
            if (err) {
               console.error("Error querying data: ", err);
            } else {
               console.log(res);
            }
            console.log('here !!!')

         }
      );

   } catch (err) {
      // Manage Errors
      console.error("Error connecting to the database and querying data: ", err);
   } finally {
      if (conn) conn.end(err => {
         if(err) {
            console.log("SQL error in closing connection: ", err);
         }
      })
   }
}

main();
