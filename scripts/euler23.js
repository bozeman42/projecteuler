function main(){
  var abundantArray = [];
  for (var i = 1; i < 28123; i++){
    if (isAbundant(i)){
      abundantArray.push(i);
    }
  }
  console.log(abundantArray);
}

function isAbundant(n){
  var total = 1;
  for (var i = 2; i <= Math.floor(n/2); i++){
    if (n % i === 0) {
      total += i;
    }
  }
  return (total > n);
}

$(document).ready(main);
