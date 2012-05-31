function FizzBuzz() {
}

FizzBuzz.method('calculate', function(input) {
    var output = '';
    if (input.isDivisibleBy(3))
        output += 'fizz';
    if (input.isDivisibleBy(5))
        output += 'buzz';

    if (output.length == 0)
        return input;
    else
        return output;
});
