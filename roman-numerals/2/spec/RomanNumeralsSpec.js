describe("RomanNumerals", function() {
  var romanNumerals;

  beforeEach(function() {
    romanNumerals = new RomanNumerals();
  });

  it("converts 1 to I", function() {
    expect(romanNumerals.convert(1)).toBe("I");
  });

});