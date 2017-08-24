function main() {
    var t0 = performance.now();
    var a,b,c;
    for (a = 1; a < 1000; a++) {
        for (b = a+1; b < (1000-(a+b)); b++) {
            c = 1000-(a+b);
            if (square(a)+square(b) === square(c)) {
                    var t1 = performance.now();
                    console.log(a,b,c,a+b+c,a*b*c);
                    $("#answer").html(a * b * (1000-(a+b)));
                    $("#calc-time").html((t1 - t0).toFixed(3));
            }
        }
    }
}

function isSquare(number) {
    return (Math.sqrt(number)%1 === 0);
}


function square(number) {
    return Math.pow(number,2);
}

$(document).ready(main);