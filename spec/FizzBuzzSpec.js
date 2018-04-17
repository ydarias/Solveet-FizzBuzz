describe("FizzBuzz", function() {

    var fizzBuzz = new FizzBuzz();

    describe("should return input for numbers not divisible by 3 or 5", function() {

        it("for example 0", function() {
            expect(fizzBuzz.calculate(0)).toEqual(0);
        });

        it("for example 1", function() {
            expect(fizzBuzz.calculate(1)).toEqual(1);
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

    describe("should return 'buzz' for numbers divisible by 5", function() {

        it("for example 5", function() {
            expect(fizzBuzz.calculate(5)).toEqual('buzz');
        });

        it("for example 10", function() {
            expect(fizzBuzz.calculate(10)).toEqual('buzz');
        });

    });

    describe("should return 'fizzbuzz' for numbers divisible by 3 and 5", function() {

        it("for example 15", function() {
            expect(fizzBuzz.calculate(15)).toEqual('fizzbuzz');
        });

        it("for example 30", function() {
            expect(fizzBuzz.calculate(30)).toEqual('fizzbuzz');
        });

    });

});