var express = require('express');
var cors = require('cors')
var router = express.Router();
var request = require('request');
var path = require('path');

const BASE= "http://cricapi.com/api/";
const API_KEY= "Q51JnDlniOTO3lJMs6RqufS7WRe2";
const CRICK_ERROR_JSON= {"statusCode":500, "response":"There is some error in connecting to cric api"};

router.use(cors());

router.get('/', function(req, res) {
  console.log("Server running on port 3000");
  res.json("Server running on port 3000").send(200);
});

router.get('/getAllPlayers', function(req, res) {
  res.sendFile(path.normalize(__dirname+'/players.json'));
  //res.json(players); 
});

router.post('/playerStats', function (req, res, next) {
  if (req.body.hasOwnProperty("pid")) {
    request(BASE + '/playerStats?pid=' + req.body.pid + '&apikey=' + API_KEY, function (err, response, body) {
      var val = JSON.parse(body);

      //This api always gives statusCode=200 , need to check based on key in a response
      if (!val.hasOwnProperty("error")) {
        res.json({ "statusCode": "200", "response": val });
      } else {
        res.json(CRICK_ERROR_JSON);
      }
    });
  } else {
    res.sendStatus(400);
  }
});

router.get('/matches', function(req, res, next) {
    request(BASE+'/matches?apikey='+API_KEY, function (err, response, body) {
        var val= JSON.parse(body);
      
        //This api always gives statusCode=200 , need to check based on key in a response
        if(!val.hasOwnProperty("error")) {
          res.json({"statusCode":"200", "response":val});
        }else{
          console.log(err);
          res.json(CRICK_ERROR_JSON);
        }
    });
});

router.get('/cricket', function(req, res, next) {
    request(BASE+'/cricket?apikey='+API_KEY, function (err, response, body) {
        var val= JSON.parse(body);
      
        //This api always gives statusCode=200 , need to check based on key in a response
        if(!val.hasOwnProperty("error")) {
          res.json({"statusCode":"200", "response":val});
        }else{
          console.log(err);
          res.json(CRICK_ERROR_JSON);
        }
    });
});

router.post('/cricketScore', function(req, res, next) {
  if (req.body.hasOwnProperty("mid")) {
  request(BASE+'/cricketScore?mid='+req.body.pid+'&apikey='+API_KEY, function (err, response, body) {
        var val= JSON.parse(body);
      
        //This api always gives statusCode=200 , need to check based on key in a response
        if(!val.hasOwnProperty("error")) {
          res.json({"statusCode":"200", "response":val});
        }else{
          console.log(err);
          res.json(CRICK_ERROR_JSON);
        }
    });
  }else {
    res.sendStatus(400);
  }
});

router.get('/matchCalendar', function(req, res, next) {
    request(BASE+'/matchCalendar?apikey='+API_KEY, function (err, response, body) {
        var val= JSON.parse(body);
      
        //This api always gives statusCode=200 , need to check based on key in a response
        if(!val.hasOwnProperty("error")) {
          res.json({"statusCode":"200", "response":val});
        }else{
          console.log(err);
          res.json(CRICK_ERROR_JSON);
        }
    });
});

module.exports = router;
