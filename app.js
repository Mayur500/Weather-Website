require('dotenv').config();
const express = require("express");
const app = express();
var expressLayouts = require('express-ejs-layouts');
const port = process.env.PORT || 8000;

app.set('view engine', 'ejs');
app.use(express.static("public"));
app.set('layout', './layouts/content');
app.set('views', './views');

app.get("/", (req, res) => {
  console.log(process.env.APIKEY);
  res.render('index');
  
});
app.get("/about", (req, res) => {
  res.render('about');
});
app.get("/weather", (req, res) => {
  res.render('weather');
});
app.listen(port);
