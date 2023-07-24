var express = require('express');
var db = require("../models");
var OrderService = require("../services/OrderService")
var orderService = new OrderService(db);
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
var router = express.Router();

/* GET home page. */
router.get('/', async function(req, res, next) {
  const orders = await orderService.getOrders();
  res.render('index', { orders: orders });
});

router.post('/', jsonParser, async function(req, res, next) {
  let {id} = req.body
  if(id == null) {
    res.status(400).send("Id provided dish name");
    return;
  }
  await orderService.serve(id);
  res.end();
});

module.exports = router;
