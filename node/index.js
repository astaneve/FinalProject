const express = require("express");
const mysql = require("mysql2/promise");
require("dotenv").config();
const PORT = process.env.PORT || 8080;
const app = express();
app.use(express.json());

const mysqlConfig = {
  host: process.env.MY_SQL_HOST,
  user: process.env.MY_SQL_USER,
  password: process.env.MY_SQL_PASSWORD,
  database: process.env.MY_SQL_DATABASE,
  port: process.env.MY_SQL_PORT,
};

app.get("/memberlist", async (req, res) => {
    try {
      const con = await mysql.createConnection(mysqlConfig);
      res.send("Success");
      await con.end();
    } catch (e) {
      console.log(e);
    }
  });

  app.get("/memberlist/:id", async (req, res) => {

    try {
  
      const id = Number(req.params.id);
  
      if (Number.isInteger(id) || !req.params.id) {
  
        const con = await mysql.createConnection(mysqlConfig);
  
        const selectAll = "SELECT * FROM user_name";
  
        const selectOne = `${selectAll} WHERE id=${id}`;
  
        const response = await con.execute(id ? selectOne : selectAll);
  
        res.send(response[0]);
  
        await con.end();
  
      } else {
  
        res.status(400).send([]);
  
      }
  
    } catch (e) {
  
      if (e.code === "ER_ACCESS_DENIED_ERROR") {
  
        res.status(401).send("Unauthorized");
  
      }
  
      console.log(e);
  
    }
  
  });
  app.post("/memberlist", async (req, res) => {

    try {
  
      const users = req.body;
  
      if (users.id && users.name && users.email && users.age) {
  
        const con = await mysql.createConnection(mysqlConfig);
  
  
  
        const response = await con.execute(
  
          `INSERT INTO user_name (id, name, email, age) values (${con.escape(
  
            users.id
  
          )}, ${con.escape(users.name)}, ${con.escape(users.email)}, ${con.escape(
  
            users.age
  
          )})`
  
        );
  
        console.log(response);
  
        res.send(response);
  
        await con.end();
  
      } else {
  
        res.status(400).send("Bad syntax");
  
      }
  
    } catch (e) {
  
      console.log(e);
  
    }
  
  });
  app.delete("/memberlist/:id", async (req, res) => {

    try {
  
      const con = await mysql.createConnection(mysqlConfig);
  
      const response = await con.execute(
  
        `DELETE FROM user_name WHERE id=${req.params.id};`
  
      );
  
      res.send(response[0]);
  
      await con.end();
  
    } catch (e) {
  
      console.log(e);
  
    }
  
  });
  app.get("*", (req, res) => {

    res.status(404).send("Page not found:(");
  
  });
  
  
  
  app.listen(PORT, () => {
  
    console.log(`Server is running on port ${PORT}`);
  
  });