function RomanNumerals() {
  var obj = {
    value: "",
    ARABIC_TO_ROMAN: [
      {
        arabic: 1000,
        roman: "M"
      },
      {
        arabic: 900,
        roman: "CM"
      },
      {
        arabic: 500,
        roman: "D"
      },
      {
        arabic: 400,
        roman: "CD"
      },
      {
        arabic: 100,
        roman: "C"
      },
      {
        arabic: 90,
        roman: "XC"
      },
      {
        arabic: 50,
        roman: "L"
      },
      {
        arabic: 40,
        roman: "XL"
      },
      {
        arabic: 10,
        roman: "X"
      },
      {
        arabic: 9,
        roman: "IX"
      },
      {
        arabic: 5,
        roman: "V"
      },
      {
        arabic: 4,
        roman: "IV"
      },
      {
        arabic: 1,
        roman: "I"
      }
    ],

    appendRomanValue: function(number, conversion) {
      var numValue = conversion.arabic,
        roman = conversion.roman;
      while (number > (numValue - 1)) {
        this.value += roman;
        number = number - numValue;
      }
      return number;
    },

    arabic2Roman: function(number) {
      this.value = "";
      for (var i in this.ARABIC_TO_ROMAN) {
        number = this.appendRomanValue(number, this.ARABIC_TO_ROMAN[i]);
      }
      return this.value;
    },

    roman2Arabic: function(roman) {
      this.value = 0;

      for (var i = 0, len = roman.length; i < len; i++) {
        if (i < roman.length - 1 && this.ROMAN_TO_ARABIC["" + roman[i] + roman[i + 1]] !== undefined) {
          this.value += this.ROMAN_TO_ARABIC["" + roman[i] + roman[i + 1]];
          i++;
        }
        else {
          this.value += this.ROMAN_TO_ARABIC[roman[i]];
        }
      }
      return this.value;
    },
    convert: function(number) {
      var intRegex = /^\d+$/;
      if (intRegex.test(number)) {
        return this.arabic2Roman(number);
      }
      else {
        return this.roman2Arabic(number);
      }

    }
  };

  var map = {};
  obj.ARABIC_TO_ROMAN.forEach(function(convert) {
    map[convert.roman] = convert.arabic;
  });

  obj["ROMAN_TO_ARABIC"] = map;

  return obj;
};