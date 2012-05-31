describe("FizzBuzz", function() {

    var fizzBuzz = new FizzBuzz();

    describe("should return input for numbers not divisible by 3 or 5", function() {

        it("for example 0", function() {
            expect(fizzBuzz.calculate(0)).toEqual(0);
        });

    });

    describe("should return 'fizz' for numbers divisible by 3", function() {

        it("for example 3", function() {
            expect(fizzBuzz.calculate(3)).toEqual('fizz');
        });

        it("for example 6", function() {
            expect(fizzBuzz.calculate(6)).toEqual('fizz');
        });

    });

});