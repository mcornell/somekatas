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
    {
      arabic: 90,
      roman: "XC"
    },
    {
      arabic: 100,
      roman: "C"
    },
    {
      arabic: 340,
      roman: "CCCXL"
    },
    {
      arabic: 400,
      roman: "CD"
    },
    {
      arabic: 500,
      roman: "D"
    },
    {
      arabic: 900,
      roman: "CM"
    },
    {
      arabic: 1000,
      roman: "M"
    },

    {
      arabic: 2014,
      roman: "MMXIV"
    },
    {
      arabic: 3888,
      roman: "MMMDCCCLXXXVIII"
    },
  ];

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

  describe("Roman to Arabic", function() {
    converts.forEach(function(run) {
      it("Converts " + run.roman + " to " + run.arabic, function() {
        expect(romanNumerals.convert(run.roman)).toBe(run.arabic);
      });
    });
  });

});