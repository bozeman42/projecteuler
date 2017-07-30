var main = function() {
    var t0 = performance.now();
    var maxPal = 0;
    var maxX = 0;
    var maxY = 0;
    for (var x = 999; x > 100; x--) {
        for (var y = 999; y >= x; y--) {
            var product = x * y;
            if (isPalindrome(product)) {
                if (product > maxPal) {
                    maxPal = product;
                    maxX = x;
                    maxY = y;
                    var result = checkHigher(x,y);
                    var t1 = performance.now();
                    $('#calc-time').html(parseInt(t1-t0));
                    $("#answer").html(result[0]+ " &times; " + result[1] + " = " + result[2]);
                    return 0;
                }
            }
        }
    }
}

var checkHigher = function(x,y) {
    var higherPal = x*y;
    var result = [x,y,higherPal]
    for (;x < 1000; x++) {
        for (var y = 100; y < 1000; y++) {
            var product = x * y;
            if (isPalindrome(product)) {
                if (product > higherPal) {
                    higherPal = product;
                    result = [x,y,higherPal]
                }
            }
        }
    }
    return result;
}

var isPalindrome = function(x) {
    var temp = x.toString();
    temp = temp.split('');
    return parseInt(temp.join('')) == parseInt(temp.reverse().join(''))
}

$(document).ready(main);