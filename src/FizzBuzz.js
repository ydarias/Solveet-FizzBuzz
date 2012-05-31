var FizzBuzz = function() {
    var fizzRule = new FizzBuzzRule(3, 'fizz');
    var buzzRule = new FizzBuzzRule(5, 'buzz');

    return new FizzBuzzCalculator([
        fizzRule,
        buzzRule
    ]);
}

