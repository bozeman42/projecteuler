var main = function() {
    var t0 = performance.now();
    var maxPal = 0;
    var maxX = 0;
    var maxY = 0;
    for (var x = 100; x < 1000; x++) {
        for (var y = x; y < 1000; y++) {
            var product = x * y;
            var temp = product.toString();
            temp = temp.split('');
            if (parseInt(temp.join('')) == parseInt(temp.reverse().join(''))) {
                if (product > maxPal) {
                    maxPal = product;
                    maxX = x;
                    maxY = y;
                }
            }
        }
    }
    var t1 = performance.now();
    $('#calc-time').html(parseInt(t1-t0));
    $("#answer").html(maxX + " &times; " + maxY + " = " + maxPal);
}

$(document).ready(main);