const express = require('express');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');

const app = express();
app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', './views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

app.get("/", (req, res) => {
  res.render("index", {});
});

app.post("/", (req, res) => {
  let context = {}
  context["first_name"] = req.body.first_name;
  res.render("index", context);
});

app.listen(3000);
