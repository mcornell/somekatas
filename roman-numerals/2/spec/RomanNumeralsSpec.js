describe("RomanNumerals", function() {
  var romanNumerals;

  var converts = [
    {
      arabic: 1,
      roman: "I"
    },
    {
      arabic: 2,
      roman: "II"
    },
    {
      arabic: 4,
      roman: "IV"
    },
    {
      arabic: 5,
      roman: "V"
    },
    {
      arabic: 6,
      roman: "VI"
    },
    {
      arabic: 9,
      roman: "IX"
    },
    {
      arabic: 10,
      roman: "X"
    },
    {
      arabic: 29,
      roman: "XXIX"
    },
    {
      arabic: 40,
      roman: "XL"
    },
    {
      arabic: 50,
      roman: "L"
    },

  ]

  beforeEach(function() {
    romanNumerals = new RomanNumerals();
  });

  describe("Arabic to Roman", function() {
    converts.forEach(function(run) {
      it("Converts " + run.arabic + " to " + run.roman, function() {
        expect(romanNumerals.convert(run.arabic)).toBe(run.roman);
      });
    });
  });

});