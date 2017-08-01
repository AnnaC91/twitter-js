const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets, showForm: true } );
});

router.get('/users/:name', function(req, res) {
  var name = req.params.name.split(" ");
  name = name.map(function (str){
    return str.charAt(0).toUpperCase()+str.slice(1);
    }).join(" ")
  var list = tweetBank.find( {name: name } );
  res.render( 'index', { tweets: list, showForm: true, username: name } );
});

router.get('/tweets/:id', function(req, res) {
  var id = parseInt(req.params.id, 10);
  var cnt = tweetBank.find({id: id });
  res.render( 'index', { tweets: cnt, showForm: false } );
});

router.post('/tweets', function(req, res) {
  console.log('hi')
  console.log(req.body)
  var name = req.body.name;
  console.log(name)
  var text = req.body.text;
  console.log(name)
  tweetBank.add(name, text);
  res.redirect('/');
});

module.exports = router;