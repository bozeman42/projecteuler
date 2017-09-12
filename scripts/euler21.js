$(document).ready(main);

function main(){
  var t0 = performance.now();
  var amicableNumbers = [];
  console.log(amicableNumbers);
  for(var i = 1; i < 10000; i++){
    var b = sumDivisors(i);
    if ((i != b) && (sumDivisors(b) == i) && (b < 10000)){
      console.log(i,b);
      if (!isDuplicateInArray(i,amicableNumbers)){
        amicableNumbers.push(i);

      }
      if (!isDuplicateInArray(b,amicableNumbers)){
        amicableNumbers.push(b);
      }
    }
  }
    console.log(amicableNumbers);
  var total = amicableNumbers.reduce(function(a,b){
    return a+b;
  });
  var t1 = performance.now();
  $("#answer").html(total);
  $('#calc-time').html(parseInt(t1-t0));
}



function sumDivisors(n){
  var divisor = 1;
  var divisorSum = 0;
  do {
    if (n % divisor ===  0){
      divisorSum += divisor;
    }
    divisor++;
  } while (divisor <= (n / 2));
  return divisorSum;
}

function isDuplicateInArray(number,arr){
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === number){
      return true;
    }
  }
  return false;
}
