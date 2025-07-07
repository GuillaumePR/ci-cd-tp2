const express = require("express");
const router = express.Router();
const pool = require("../db");

// GET /
router.get("/", (req, res) => {
  res.sendFile(require("path").join(__dirname, "../../public/index.html"));
});

// POST /submit
router.post("/submit", async (req, res) => {
  const { name, email } = req.body;
  console.log("Received submission:", name, email);

  if (!name || !email || !email.includes("@")) {
    return res.status(400).send("Invalid input");
  }

  await pool.query("INSERT INTO submissions (name, email) VALUES (?, ?)", [
    name,
    email,
  ]);
  res.redirect("/submissions");
});

// GET /submissions
router.get("/submissions", async (req, res) => {
  const submissions = await pool.query("SELECT * FROM submissions");
  res.json(submissions);
});

module.exports = router;
