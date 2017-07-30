var main = function() {

    var result = 20*19*17*13*11*7*3;
    var t0 = performance.now();
    while(!div1to20(result)) {
        result += (20*19*17*13*11*7*3);
    }
    var t1 = performance.now();
    $('#calc-time').html(t1-t0);
    $('#answer').html(result);
}

var div1to20 = function(x) {
    for(var i = 1; i <=20; i++) {
        if (x%i != 0) {
            return false;
        }
    }
    return true;
}



$(document).ready(main);