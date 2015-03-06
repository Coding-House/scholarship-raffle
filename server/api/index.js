var express = require('express');

var Router = express.Router();

var finalPick = false, winnerIndex, runnerUpIndex;

function maxRandomize(max){
  return Math.floor(Math.random() * max);
}

Router.get('/getRandom' , function(req, res) {
  if ( !finalPick ) {
    console.log('generating new randoms');
    var max = parseInt(req.query.max);
    winnerIndex = maxRandomize(max);
    runnerUpIndex = maxRandomize(max);
    while (runnerUpIndex === winnerIndex) {
      runnerUpIndex = maxRandomize(max);
    }

    if ( (new Date()).getTime() >= 1425673800000 ) { // Lock the result at the pick time
      finalPick = true
    }
  } else {
    console.log('using past randoms');
  }
  res.json({ winnerIndex: winnerIndex , runnerUpIndex: runnerUpIndex, finalPick: finalPick })
});

module.exports = Router ;
