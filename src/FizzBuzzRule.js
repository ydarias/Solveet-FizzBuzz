function FizzBuzzRule(divisor, output) {
    this.divisor = divisor;
    this.output = output;

    this.apply = function(input) {
        if (input.isDivisibleBy(this.divisor))
            return this.output;
        else
            return '';
    }
}