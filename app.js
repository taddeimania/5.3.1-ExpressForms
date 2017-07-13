const express = require('express');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');

const app = express();
app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', './views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(expressValidator());

app.get("/", (req, res) => {
  res.render("index", {});
});

app.post("/signup", (req, res) => {
  req.checkBody("first_name", "Field must not be empty.").notEmpty();
  req.checkBody("last_name", "Field must not be empty.").notEmpty();
  let errors = req.validationErrors();
  let context = {};

  if (errors) {
    context["errors"] = errors;
  }
  context["first_name"] = req.body.first_name;
  context["last_name"] = req.body.last_name;

  res.render("index", context);


});

app.listen(process.env.PORT || 3000);
