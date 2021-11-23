const express = require("express");
<<<<<<< Updated upstream
=======
<<<<<<< HEAD

const app = express();
const port = 8080;

const locations = require("./routes/locations.js");

app.use("/locations", locations);

const server = app.listen(port, () => {
  console.log(`Listening on port ${server.address().port}`);
});

const shutdown = () => {
  console.log("Close signal received: closing HTTP server");
  server.close(() => {
    console.log("HTTP server closed");
  });
};
process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);
=======
>>>>>>> Stashed changes
// const mysql = require("mysql");
const app = express();
const port = 8080;
// require("dotenv").config();

/* const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DB,
}); */

/* app.get("/locations", (req, res) => {
  connection.query("SELECT * FROM locations", (error, results) => {
    if (error) throw error;
    res.send(results);
    connection.end();
  });
}); */

let database = [
  { id: 1, latidude: 60, longitude: 27 },
  { id: 2, latidude: 40, longitude: 50 },
  { id: 3, latidude: 10, longitude: 20 },
  { id: 4, latidude: 100, longitude: 62 },
  { id: 5, latidude: 60, longitude: 80 },
  { id: 6, latidude: 91, longitude: 33 },
];

app.use(express.json());

app.get("/locations/", (req, res) => {
  res.send(database);
});

app.get("/locations/:id([0-9]+)", (req, res) => {
  let temp = null;
  for (let location of database) {
    if (location.id == req.params.id) {
      temp = location;
    }
  }
  res.send(temp);
});

app.delete("/locations/:id([0-9]+)", (req, res) => {
  database = database.filter((locations) => locations.id != req.params.id);
  res.send(null);
});

app.post("/locations", (req, res) => {
  console.log(req.body);
  database.push(req.body);
  res.send("added to database");
});

const server = app.listen(port, () => {
  console.log(`Listening on port ${server.address().port}`);
  /*connection.connect((err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("mysql yhteys luotu");
    }
  });
}); */

  /* const shutdown = () => {
  console.log("Close signal received: closing HTTP server");
  server.close(() => {
    console.log("HTTP server closed");
    connection.end(() => {
      console.log("mysql connection closed");
      process.exit(0);
    });
  });
}; 
*/
});
<<<<<<< Updated upstream
=======
>>>>>>> main
>>>>>>> Stashed changes
