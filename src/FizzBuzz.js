function FizzBuzz() {
}

FizzBuzz.method('calculate', function(input) {
    if (input === 0)
        return 0;
    if (input.isDivisibleBy(3))
        return 'fizz';
    return input;
});
