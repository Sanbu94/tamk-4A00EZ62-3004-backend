const mysql = require("mysql");

require("dotenv").config();

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DB,
});

let connectionFunctions = {
  connect: () => {
    connection.connect();
  },
  close: (callback) => {
    connection.end();
  },
  save: (location, callback) => {},
  findAll: (callback) => {
    let location = { latitude: 60, longitude: 60 };
    let query =
      "INSERT INTO locations (latitude, longitude) VALUES (" +
      location.latitude +
      "," +
      location.longitude +
      ")";

    let query2 = "select * from locations";

    connection.query(query, (err, result) => {
      if (err) {
        throw err;
      }
      console.log("location added");
    });

    connection.query(query2, (err, locations) => {
      if (err) {
        throw err;
      }
      locations.forEach((location) => console.log(location));
    });
  },
  deleteById: (id, callback) => {},
  findById: (id, callback) => {},
};

module.exports = connectionFunctions;
