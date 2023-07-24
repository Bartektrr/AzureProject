var express = require('express');
var db = require("../models");
var OrderService = require("../services/OrderService")
var orderService = new OrderService(db);
var router = express.Router();

/* GET home page. */
router.get('/', async function(req, res, next) {
  const active = await orderService.getActiveCount();
  const all = await orderService.getCount()
  res.render('index', { active: active, all: all });
});


module.exports = router;
