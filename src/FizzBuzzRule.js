function FizzBuzzRule(divisor, output) {

    this.apply = function(input) {
        return input.isDivisibleBy(divisor) ? output : '';
    }

}