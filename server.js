const express = require("express");
const app = express();
const port = 3001;

app.get("/", (req, res, error) => {
  res.send("Welcome To My FullStack MERN APP.");
  console.log("/");
});

app.get("/home", (req, res, error) => {
  res.send("Welcome to MERN Home Page");
  console.log("/home");
});

app.get("/dashboard", (req, res, error) => {
  res.send("Welcome to MERN Dashboard Page");
});

app.get("/contact", (req, res, error) => {
  res.send("Welcome to MERN Contact Page");
});

app.listen(port, (req, res, err) => {
  console.log(`Listening server on port: ${port}`);
});
