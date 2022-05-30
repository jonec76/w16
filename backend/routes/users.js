var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
  res.send("yoooo")
});

router.get("/me", function(req, res){
  res.send("This is jonec")
});

module.exports = router;
