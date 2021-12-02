const express = require("express");
const app = express();
const port = 8080;
const locations = require("./routes/locations.js");
const cors = require("cors");
app.use(cors());
//app.use("/locations", locations);
app.use(express.static("./frontend/build"));

app.use((req, res, next) => {
  //console.log("Time:", Date.now());
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

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
