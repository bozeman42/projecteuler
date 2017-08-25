var main = function () {
    var t0 = performance.now();
    var sumSquares = 0;
    var squareSum = 0;
    for (var i = 1; i <= 100; i++) {
        sumSquares += (i*i);
        squareSum += i;
    }
    console.log(squareSum);
    console.log(sumSquares);
    $("#answer").html(Math.abs(squareSum * squareSum - sumSquares));
    var t1 = performance.now();
    $("#calc-time").html(t1-t0);
};


$(document).ready(main);
