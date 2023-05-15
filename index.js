const express = require("express");
const cors = require("cors");

const app = express();

const port = process.env.PROT || 5000;

app.use(cors());

const chef_data = require("./database/chef_data.json");

const foods = require("./database/foods.json");

app.get("/", (req, res) => {
  res.send("Chef's Corner Server is running");
});

app.get("/chef_data", (req, res) => {
  res.send(chef_data);
});

app.get("/chef_data/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const selectedChef = chef_data.find((c) => c.id === id);
  res.send(selectedChef);
});

app.get("/foods", (req, res) => {
  res.send(foods);
});

app.listen(port, () => {
  console.log(`Server is running on PORT number ${port}`);
});
