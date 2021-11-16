const express = require("express");
const app = express();

app.get("/locations", (req, res) => {
  res.send("Getting all locations");
});

app.get("/locations/:id([0-9]+)", (req, res) => {
  res.send("Getting location with id " + req.params.id);
});

app.delete("/locations/:id([0-9]+)", (req, res) => {
  res.send("Delete location with id " + req.params.id);
});

app.post("/locations", (req, res) => {
  res.send("Adding new location");
});

const server = app.listen(8080, () => {
  console.log(`Listening on port ${server.address().port}`);
});

/* ( 3 )const express = require("express");
const app = express();

const locations = require("./routes/locations.js");

app.use("/", locations);

const server = app.listen(8080, () => {
  console.log(`Listening on port ${server.address().port}`);
}); 
*/

/* ( 2 )router.get("/mikkihiiri", (req, res) => {
  res.send("router");
});

app.use("/akuankka", router); 
*/

/* ( 1 )const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
}) 
*/
