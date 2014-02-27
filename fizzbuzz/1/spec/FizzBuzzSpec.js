describe("FizzBuzz", function() {

  it("It knows how to calculate fizzbuzz", function() {
    expect(fizzbuzz(1)).toBe(1);
    expect(fizzbuzz(2)).toBe(2);
    expect(fizzbuzz(3)).toBe('fizz');
    expect(fizzbuzz(4)).toBe(4);
    expect(fizzbuzz(5)).toBe('buzz');
    expect(fizzbuzz(6)).toBe('fizz');
    expect(fizzbuzz(9)).toBe('fizz');
    expect(fizzbuzz(10)).toBe('buzz');
  });

});