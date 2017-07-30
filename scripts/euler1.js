var main = function (){
  var t0 = performance.now();
  var sum = 0;
  for (var i = 3; i < 1000; i++) {
    if ((i%3 == 0) || (i%5 == 0))
      sum += i;
  }
  var t1 = performance.now();
  $('#calc-time').html(parseInt(t1-t0));
  $('#answer').html(sum)
}

$(document).ready(main);
