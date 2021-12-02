const express = require("express");
const connection = require("../databases/crudrepository.js");
var router = express.Router();
router.use(express.json());

let connect = false;

router.use((req, res, next) => {
  if (connect == false) {
    connection.connect();
    connect = true;
  }

  next();
});

router.get("/", async (req, res) => {
  try {
    let result = await connection.findAll();
    res.send(result);
  } catch (err) {
    res.send(err);
  }
});

router.get("/:id([0-9]+)", async (req, res) => {
  try {
    let result = await connection.findById(req.params.id);
    res.send(result);
  } catch (err) {
    res.send(err);
  }
});

router.delete("/:id([0-9]+)", async (req, res) => {
  try {
    let result = await connection.deleteById(req.params.id);
    res.send(result);
  } catch (err) {
    res.send(err);
  }
});

router.post("/", async (req, res) => {
  try {
    let result = await connection.save(req.body);
    res.send(result);
  } catch (err) {
    res.send(err);
  }
});
module.exports = router;
