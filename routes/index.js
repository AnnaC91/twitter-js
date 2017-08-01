const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets } );
});

router.get('/users/:name', function(req, res) {
  var name = req.params.name.split(" ");
  console.log(name)
  name = name.map(function (str){
    return str.charAt(0).toUpperCase()+str.slice(1);
    }).join(" ")
  console.log(name)
  console.log("I am here")
  var list = tweetBank.find( {name: name } );
  console.log(list)
//   console.log(name)
//   console.log(tweetBank.list())
  res.render( 'index', { tweets: list } );
});

module.exports = router;