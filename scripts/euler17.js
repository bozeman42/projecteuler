$(document).ready(main);

function main(){
  var t0 = performance.now();
  var units = ['','one','two','three','four','five','six','seven','eight','nine'];
  var teens = ['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
  var hundred = 'hundred';
  var tens = ['','','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
  tens = tens.map(function(element){
    return element.length;
  });
  units = units.map(function(element){
    return element.length;
  });
  teens = teens.map(function(element){
    return element.length;
  });
  hundred = hundred.length;
  var and = 3;
  var count = 0;
  for (var i = 1; i <= 1000; i++){
    if (((i % 100) - (i % 10)) === 10) {
      count += teens[i%10];
    } else {
      count += tens[((i%100)-(i%10))/10] + units[i%10];
    }
    if (i >= 100 && i < 1000) {
      count += units[(i-(i%100))/100] + hundred;
      if ((i%100) != 0) {
        count += and;
      }
    }
  }
  count += 'onethousand'.length;
  var t1 = performance.now();
  console.log(count);
  $("#answer").html(count);
  $('#calc-time').html(parseInt(t1-t0));
}
