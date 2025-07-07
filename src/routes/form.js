import express from "express";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import pool from "../db/index.js"; // Assure-toi que ton fichier db/index.js exporte bien avec `export default`

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// GET /
router.get("/", (req, res) => {
  res.sendFile(join(__dirname, "../../public/index.html"));
});

// POST /submit
router.post("/submit", async (req, res) => {
  const { name, email } = req.body;

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
  const [submissions] = await pool.query("SELECT * FROM submissions");
  res.json(submissions);
});

export default router;
