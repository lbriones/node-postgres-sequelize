var express = require('express');
var models = require('../models/index');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// get all todos
router.get('/todos', function(req, res) {
  models.Todo.findAll({}).then(function(todos) {
    res.json(todos);
  });
});

// get all todos
router.get('/allusers', function(req, res) {
  models.User.findAll({}).then(function(users) {
    res.json(users);
  });
});


router.post('/users', function(req, res) {
  models.User.create({
    email: req.body.email
  }).then(function(user) {
    res.json(user);
  });
});


module.exports = router;
