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
  close: () => {
    connection.end();
  },
  save: (location) => {
    const saveQ = `INSERT INTO locations (latitude, longitude) VALUES (${location.latitude},${location.longitude})`;
    function funkkari(resolve, reject) {
      connection.query(saveQ, (err) => {
        if (err) {
          reject("error");
        } else {
          resolve("Success!");
        }
      });
    }
    return new Promise(funkkari);
  },

  findAll: () => {
    const findQ = "SELECT * FROM locations";
    function funkkari(resolve, reject) {
      connection.query(findQ, (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    }
    return new Promise(funkkari);
  },
  deleteById: (id) => {
    const deleteQ = `DELETE FROM locations WHERE id=${id}`;
    function funkkari(resolve, reject) {
      connection.query(deleteQ, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve("Success!");
        }
      });
    }
    return new Promise(funkkari);
  },

  findById: (id) => {
    const findIdQ = `SELECT * FROM locations WHERE id =${id}`;
    function funkkari(resolve, reject) {
      connection.query(findIdQ, (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    }
    return new Promise(funkkari);
  },
};

module.exports = connectionFunctions;
