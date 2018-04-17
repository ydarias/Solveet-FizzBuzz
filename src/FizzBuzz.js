var FizzBuzz = function(timeProvider) {

    var fizzBuzzRule = new FizzBuzzRule('fizzbuzz');
    var fizzRule = new FizzRule('fizz');
    var buzzRule = new BuzzRule('buzz');
    var primeRule = new PrimeRule('pizz');
    var timeMatchRule = new TimeMatchRule(timeProvider, (input) => { return input * input });

    return new FizzBuzzCalculator([
        fizzBuzzRule,
        fizzRule,
        buzzRule,
        primeRule,
        timeMatchRule
    ]);
}

