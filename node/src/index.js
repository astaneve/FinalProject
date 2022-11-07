const express = require("express");
const mysql = require("mysql2/promise");
const cors = require("cors");
const {port} = require("./config");
const {member} = require("./routes/v1");
const app = express();

app.use(express.json());
app.use(cors());
app.use("/v1/members", member);
app.all("*", (req, res) => {

  res.status(404).send("Page not found:(");
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});