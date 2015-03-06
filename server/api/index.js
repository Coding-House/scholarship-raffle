var express = require('express');

var Router = express.Router();

var runnerUpIndex, winnerIndex ;

function maxRandomize(max){
  return Math.floor(Math.random() * max);
}

Router.get('/getRandom' , function(req, res){
  if( !runnerUpIndex || !winnerIndex){
    console.log('generating new randoms');
    var max = parseInt(req.query.max);
    winnerIndex= maxRandomize(max);
    runnerUpIndex = maxRandomize(max);
    while(runnerUpIndex === winnerIndex){
      runnerUpIndex = maxRandomize(max);
    }
  }
  else {
    console.log('using past randoms');
  }
  res.json({winnerIndex: winnerIndex , runnerUpIndex: runnerUpIndex })
});

module.exports = Router ;