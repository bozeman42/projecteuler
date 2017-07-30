var main = function () {
  var t0 = performance.now();
  var prev = 1;
  var sum = 0;
  for (var i = 2; i < 4000000;) {
    if (i%2 == 0) {
      sum += i;
    }
    var temp = i;
    i += prev;
    prev = temp;
  }
  var t1 = performance.now();
  $('#calc-time').html(parseInt(t1-t0));
  $('#answer').html(sum);
}

$(document).ready(main);