function main() {
  var t0 = performance.now();
  var maxIterations = 0;
  var maxIterationValue = 0;
  for (var i = 1; i < 1000000; i++) {
    var iterations = 0;
    var value = i;
    while (value != 1) {
      iterations++;
      value = sequence(value);
    }
    if (iterations > maxIterations) {
      maxIterations = iterations;
      maxIterationValue = i;
    }
  }
  var t1 = performance.now();
  $("#answer").html(maxIterationValue);
  $('#calc-time').html(parseInt(t1-t0));
}

$(document).ready(main);

function sequence(n) {
  if (n%2 ==0) {
    return (n/2);
  } else {
    return (3*n + 1);
  }
}
