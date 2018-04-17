function PrimeRule(output) {

    this.apply = function(input) {
        return input.isPrime() ? output : '';
    }

}