var FizzBuzz = function() {
    var fizzBuzzRule = new FizzBuzzRule('fizzbuzz');
    var fizzRule = new FizzRule('fizz');
    var buzzRule = new BuzzRule('buzz');
    var primeRule = new PrimeRule('pizz');

    return new FizzBuzzCalculator([
        fizzBuzzRule,
        fizzRule,
        buzzRule,
        primeRule
    ]);
}

