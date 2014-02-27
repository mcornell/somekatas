function fizzbuzz(num) {
  var result = "";
  if (num % 3 === 0) {
    result = "fizz";
  }
  if (num % 5 === 0) {
    result = result.concat("buzz");
  }
  return (result) ? result : num;
}