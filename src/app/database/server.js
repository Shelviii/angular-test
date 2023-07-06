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
        res.json({ status: 500, error: "Internal server error" });
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
        res.json({ status: 500, error: "Internal server error" });
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
        res.json({ status: 500, error: "Internal server errror" });
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
        res.json({ status: 500, error: "Internal server errror" });
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
      res.json({ status: 500, error: "Internal server error" });
    } else {
      res.json(results.rows);
    }
  });
});

app.post("/category", (req, res) => {
  const { category } = req.body;
  pool.query(
    "INSERT INTO category (category) VALUES ($1)",
    [category],
    (error, results) => {
      if (error) {
        console.error(error);
        res.json({ status: 500, error: "Internal server error" });
      } else {
        res.json({ status: 200, message: "Data inserted successfully" });
      }
    }
  );
});

app.put("/category/:id", (req, res) => {
  let { category, active, updated_datetime, id_category } = req.body;
  updated_datetime = moment();
  pool.query(
    "UPDATE category SET category = $1 ,active = $2, updated_datetime = $3 WHERE id_category = $4",
    [category, active, updated_datetime, id_category],
    (error, results) => {
      if (error) {
        console.error(error);
        res.json({ status: 500, error: "Internal server errror" });
      } else {
        res.json({ status: 200, message: "Data updated successfully" });
      }
    }
  );
});

app.get("/contact", (req, res) => {
  pool.query("SELECT * FROM contact WHERE active = true ORDER BY created_datetime DESC", (err, results) => {
    if (err) {
      console.error(err);
      res.json({ status: 500, error: "Internal server errror" });
    } else {
      res.json(results.rows);
    }
  });
});

app.post("/contact", (req, res) => {
  const { title, detail, name, tel, email } = req.body;
  pool.query(
    "INSERT INTO contact (title,detail,name,tel,email) VALUES ($1,$2,$3,$4,$5)",
    [title, detail, name, tel, email],
    (err, results) => {
      if (err) {
        console.error(err);
        res.json({ status: 500, error: "Internal server errror" });
      } else {
        res.json({ status: 200, message: "Data Created Successfully" });
      }
    }
  );
});

app.put("/contact/:id", (req, res) => {
  const { id } = req.params;
  const { title, detail, name, tel, email, active, reading } = req.body;
  pool.query(
    "UPDATE contact SET title = $1, detail = $2, name = $3, tel = $4, email = $5, active = $6, reading = $7  WHERE id_contact = $8",
    [title, detail, name, tel, email, active, reading, id],
    (err, results) => {
      if (err) {
        console.error(err);
        res.json({ status: 500, error: "Internal server errror" });
      } else {
        res.json({ status: 200, message: "Data Updated Successfully" });
      }
    }
  );
});

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}/`);
});
