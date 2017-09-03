function main() {
  var t0 = performance.now();
  var numString = "10715086071862673209484250490600018105614048117055336074437503883703510511249361224931983788156958581275946729175531468251871452856923140435984577574698574803934567774824230985421074605062371141877954182153046474983581941267398767559165543946077062914571196477686542167660429831652624386837205668069376";
  var numArray = numString.split('');
  var result = numArray.reduce(function(a,b){
    return parseInt(a)+parseInt(b);
  });
  var t1 = performance.now();
  $("#answer").html(result);
  $('#calc-time').html(parseInt(t1-t0));
}

$(document).ready(main);
