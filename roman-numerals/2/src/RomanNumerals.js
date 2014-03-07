function RomanNumerals() {};

RomanNumerals.prototype.convert = function(number) {
  value = "";
  while (number > 9) {
    value += "X";
    number = number - 10;
  }

  while (number > 4) {
    value += "V";
    number = number - 5;
  }


  while (number > 0) {
    value += "I";
    number--;
  }
  return value;
};