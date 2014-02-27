function fizzbuzz(num) {
  if (num % 5 === 0) {
    return "buzz";
  }
  return (num % 3 === 0) ? "fizz" : num;
}