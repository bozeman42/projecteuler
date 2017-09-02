function main() {
  var BOX_SIDE = 20;
  var paths = 0;
  var t0 = performance.now();
  for (var i = 0; i <= BOX_SIDE; i++) {
    paths += Math.pow(choose(BOX_SIDE,i),2);
  }
  var t1 = performance.now();
  $("#answer").html(paths);
  $('#calc-time').html(parseInt(t1-t0));
}

function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return ( n * factorial(n - 1));
}

function choose(n,k){
  var nFact = factorial(n);
  var kFact = factorial(k);
  var nMinusKFact = factorial(n-k);
  return (nFact/(kFact*nMinusKFact));
}

$(document).ready(main);
