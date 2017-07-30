var main = function() {
  var t0 = performance.now();
  var target = 600851475143;
  var maxFactor = 0;
  for (var i = 2; i <= target; i++){
    while (target%i == 0) {
      target /= i;
      maxFactor = i;
    }
  }
  var t1 = performance.now();
  $('#answer').html(maxFactor);
  $('#calc-time').html(t1-t0);
}

$(document).ready(main);