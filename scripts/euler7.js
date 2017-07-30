var main = function(){
    t0 = performance.now();
    var primeCount = 1;
    var testNumber = 1;
    while (primeCount < 10001) {
        testNumber += 2;
        if (isPrime(testNumber)) {
            primeCount++;
        }
    }
    t1 = performance.now();
    $("#answer").html(testNumber);
    $("#calc-time").html((t1 - t0).toFixed(3));
}

var isPrime = function(x) {
    if ((x%2) == 0)
        return false;
    for (var i = 3; i <= Math.sqrt(x); i += 2) {
        if (!(x%i)) {
            return false;
        }
    }
    return true;
    
}

$(document).ready(main)