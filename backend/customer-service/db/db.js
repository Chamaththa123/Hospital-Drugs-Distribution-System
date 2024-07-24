const mysql = require('mysql');

const connection = mysql.createConnection({
host :"localhost",
user:'root',
password:"",
database:"drug"
});

connection.connect((err) => {
    if (err) {
      console.error("Error connecting to database:", err);
      return;
    }
    console.log("Connected to database");
  });

  module.exports = connection;