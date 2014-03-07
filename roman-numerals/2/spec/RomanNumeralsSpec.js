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
      arabic: 5,
      roman: "V"
    },
    {
      arabic: 6,
      roman: "VI"
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