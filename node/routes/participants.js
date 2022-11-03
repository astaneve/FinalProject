const express = require("express");
const mysql = require("mysql2/promise");
const { dbconfig } = require("../config.js");
const router = express.Router();
router.get("/", async (req, res) => {
  try {
    const con = await mysql.createConnection(dbconfig);
    const response = await con.execute("SELECT * FROM user_name");
    res.send(response[0]);
    await con.end();
  } catch (e) {
    console.log(e);
  }
});

router.post("/", async (req, res) => {
  try {
    const con = await mysql.createConnection(dbconfig);
    const response = await con.execute(
      `INSERT INTO user_name (name, email, age) values('${req.body.name}','${req.body.email}','${req.body.age}')`
    );
    res.send(response[0]);
    await con.end();
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;