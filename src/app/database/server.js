const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");

const app = express();

var corsOptions = {
  origin: "http://localhost:4200",
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "test",
  password: "12345678",
  port: 5432,
});
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}/`);
});

app.get("/product", (req, res) => {
  pool.query("SELECT * FROM product where active = true", (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    } else {
      res.json(results.rows);
    }
  });
});
