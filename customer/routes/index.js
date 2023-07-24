var express = require('express');
var db = require("../models");
var OrderService = require("../services/OrderService")
var orderService = new OrderService(db);
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', jsonParser, async function(req, res, next) {
  const {FirstName, LastName, DishName} = req.body
  if(FirstName == null) {
    res.status(400).send("Not provided first name");
    return;
  }
  if(LastName == null) {
    res.status(400).send("Not provided last name");
    return;
  }
  if(DishName == null) {
    res.status(400).send("Not provided dish name");
    return;
  }
  await orderService.create(FirstName, LastName, DishName);
  res.end();
});

module.exports = router;
