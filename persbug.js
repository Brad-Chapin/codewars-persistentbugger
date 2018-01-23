function persistence (num) {
  let count = 0, product;
  let digits = num.toString().split('');
  while (digits.length >1) {
    product = digits.reduce(function (a,b){
      return a*b;
    });
    count++;
    digits = product.toString().split('');
  }
  return count;
}

console.log((persistence(39)));
console.log((persistence(4)));
console.log((persistence(25)));
console.log((persistence(999)));
