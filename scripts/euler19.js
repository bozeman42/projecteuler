$(document).ready(main);

function main() {
  var t0 = performance.now();
  var days = daysInYear(1900);
  var sundaysOnFirst = 0;
  for(var year = 1901; year < 2001; year++) {
    var months = yearArray(year);
    for (var month = 0; month < 12; month++){
      if (isSunday(days)){
        sundaysOnFirst++;
      }
      days += months[month];
    }
  }
  var t1 = performance.now();
  $("#answer").html(sundaysOnFirst);
  $('#calc-time').html(parseInt(t1-t0));
}

function february(year) {
  if ((year%4 === 0) && ((year%100 !== 0) || (year%400 === 0))) {
    return 29;
  } else {
    return 28;
  }
}

// day of the week some number of days after January 1, 1900
function dayOfWeek(days){
  var week = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
  return week[days%7];
}

function yearArray(year) {
  return [31,february(year),31,30,31,30,31,31,30,31,30,31];
}



function daysInYear(year){
  var arr = yearArray(year);
  return (yearArray(year).reduce(function(a,b){
    return a+b;
  }));
}

function isSunday(days) {
  return (days%7) === 6;
}
