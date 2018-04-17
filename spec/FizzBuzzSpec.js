describe("FizzBuzz", function() {

    var fakeTimeProvider = {
        getCurrentTime: function() {
            return 1234523414;
        }
    };

    var fizzBuzz = new FizzBuzz(fakeTimeProvider);

    describe("should return input for numbers not divisible by 3 or 5", function() {

        it("for example 8", function() {
            expect(fizzBuzz.calculate(8)).toEqual(8);
        });

        it("for example 16", function() {
            expect(fizzBuzz.calculate(16)).toEqual(16);
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

    describe("should return 'pizz' for prime numbers", function() {
        
        it("for example 2", function() {
            expect(fizzBuzz.calculate(2)).toEqual('pizz');
        });

    });

    describe("should return squared of the input if", () => {

        it("input matches the last two digits of current time in epoch format", () => {
            expect(fizzBuzz.calculate(14)).toEqual(196);
        });

    });

});
