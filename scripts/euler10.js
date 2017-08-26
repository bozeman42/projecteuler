/*

The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
Find the sum of all the primes below two million.

*/

const UPPER_LIMIT = 2000000;

function main() {
    var t0 = performance.now();
    var numArray = [];
    // Build list of numbers;
    for (var i = 3; i < UPPER_LIMIT; i += 2) {
        numArray.push(i);
    }
    var sum = 2;
    for (var j = 3; j < Math.sqrt(UPPER_LIMIT); j = numArray[0]) {
        sum += j;
        numArray = filterPrime(numArray,j);
    }
    sum += numArray.reduce(function(a,b){
      return (a + b);
    },0);
    var t1 = performance.now();
    $("#answer").text(sum);
    $("#calc-time").html((t1 - t0).toFixed(3));
}

function filterPrime(array,prime) {
  return array.filter(function(number){
    return (number%prime);
  });
}

$(document).ready(main);
