const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");
const moment = require("moment");

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

app.get("/product", (req, res) => {
  pool.query(
    "SELECT p.*,c.category as cate FROM product p LEFT JOIN category c ON p.category = c.id_category where p.active = true ORDER BY updated_datetime DESC",
    (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
      } else {
        res.json(results.rows);
      }
    }
  );
});

app.get("/product/type/:id", (req, res) => {
  const { id } = req.params;
  pool.query(
    "SELECT p.*,c.category as cate FROM product p LEFT JOIN category c ON p.category = c.id_category where p.active = true and p.category = $1 ORDER BY updated_datetime DESC",
    [id],
    (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
      } else {
        res.json(results.rows);
      }
    }
  );
});

app.post("/product", (req, res) => {
  const { title, price, category, detail } = req.body;
  pool.query(
    "INSERT INTO product (title,price,category,detail) VALUES ($1,$2,$3,$4)",
    [title, price, category, detail],
    (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server errror" });
      } else {
        res.json({ status: 200, message: "Data inserted successfully" });
      }
    }
  );
});

app.put("/product/:id", (req, res) => {
  const { id } = req.params;
  let { title, price, category, detail, active, updated_datetime, thumbnail } =
    req.body;
  updated_datetime = moment();
  pool.query(
    "UPDATE product SET title = $1 ,price = $2, category = $3, detail = $4, active = $6, updated_datetime = $7, thumbnail = $8 WHERE id_product = $5",
    [title, price, category, detail, id, active, updated_datetime, thumbnail],
    (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server errror" });
      } else {
        res.json({ status: 200, message: "Data updated successfully" });
      }
    }
  );
});

app.get("/category", (req, res) => {
  pool.query("SELECT * FROM category where active = true", (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    } else {
      res.json(results.rows);
    }
  });
});

app.post('/category', (req, res) => {
  const { category } = req.body;
  pool.query(
    'INSERT INTO category (category) VALUES ($1)',
    [category],
    (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
      } else {
        res.json({ status: 200, message: 'Data inserted successfully' });
      }
    }
  );
});


app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}/`);
});
