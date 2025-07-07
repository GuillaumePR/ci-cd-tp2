const express = require("express");
const path = require("path");
const formRoutes = require("./routes/form");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});

app.use("/", formRoutes);

module.exports = app;
