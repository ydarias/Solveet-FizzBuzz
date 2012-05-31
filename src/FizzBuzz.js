function FizzBuzz() {
}

FizzBuzz.method('calculate', function(input) {
    if (input === 0)
        return 0;
    if (input % 3 === 0)
        return 'fizz';
    return input;
});
