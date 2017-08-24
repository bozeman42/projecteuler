/*

The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
Find the sum of all the primes below two million.

*/

function main() {
    var t0 = performance.now();
    var numArray = [];
    // Build list of numbers;
    for (var i = 3; i < 2000000; i += 2) {
        numArray.push(i);
    }
    var sum = 2;
    for (var j = 3; numArray.length > 0; j = numArray[0]) {
        sum += j;
        if (j < Math.sqrt(2000000)) {
          numArray = filterPrime(numArray,j);
        } else {
          numArray.shift();
        }
    }
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
