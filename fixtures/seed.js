import pool from "../src/db";

async function seed() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS submissions (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255),
      email VARCHAR(255)
    )
  `);

  await pool.query("DELETE FROM submissions");
  await pool.query("INSERT INTO submissions (name, email) VALUES (?, ?)", [
    "Alice",
    "alice@example.com",
  ]);
  process.exit();
}

seed();
