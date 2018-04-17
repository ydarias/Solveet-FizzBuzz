var FizzBuzz = function(timeProvider) {

    return new FizzBuzzCalculator([
        new FizzBuzzRule('fizzbuzz'),
        new FizzRule('fizz'),
        new BuzzRule('buzz'),
        new PrimeRule('pizz'),
        new TimeMatchRule(timeProvider, (input) => { return input * input })
    ]);
}

