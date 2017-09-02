const NUMBER_OF_FACTORS = 500;

function main() {
  var t0 = performance.now();
  var factors = 0;
  var triangularNumber = 0;
  for (var i = 1; factors <= NUMBER_OF_FACTORS; i++) {
    triangularNumber += i;
    var exponentArray = [];
    var temp = triangularNumber;
    for (var primeFactor = 2; temp > 1; primeFactor++) {
      factors = 0;
      var exponent = 0;
      while ((temp % primeFactor) === 0) {
        temp /= primeFactor;
        exponent++;
      }
      if (exponent > 0) {
        exponentArray.push(exponent);
      }
    }
    factors = exponentArray.reduce(function(a,b){
      return (a * (b + 1));
    },1);
  
  }
  var t1 = performance.now();
  $("#answer").html(triangularNumber);
  $('#calc-time').html(parseInt(t1-t0));
  console.log(triangularNumber);
}

$(document).ready(main);
