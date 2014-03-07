function RomanNumerals() {
  value: "",
  ARABIC_TO_ROMAN = {
    500: "D",
    400: "CD",
    100: "C",
    90: "XC",
    50: "L",
    40: "XL",
    10: "X",
    9: "IX",
    5: "V",
    4: "IV",
    1: "I"
  }
};

RomanNumerals.prototype.appendValue = function(number, numValue) {
  while (number > (numValue - 1)) {
    this.value += ARABIC_TO_ROMAN[numValue];
    number = number - numValue;
  }
  return number;
}

RomanNumerals.prototype.convert = function(number) {
  this.value = "";
  number = this.appendValue(number, 500);
  number = this.appendValue(number, 400);
  number = this.appendValue(number, 100);
  number = this.appendValue(number, 90);
  number = this.appendValue(number, 50);
  number = this.appendValue(number, 40);
  number = this.appendValue(number, 10);
  number = this.appendValue(number, 9);
  number = this.appendValue(number, 5);
  number = this.appendValue(number, 4);
  number = this.appendValue(number, 1);
  return this.value;
};