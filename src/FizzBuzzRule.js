function FizzRule(output) {

    this.apply = function(input) {
        return input.isDivisibleBy(3) ? output : '';
    }

}

function BuzzRule(output) {

    this.apply = function(input) {
        return input.isDivisibleBy(5) ? output : '';
    }

}

function FizzBuzzRule(output) {

    this.apply = function(input) {
        var result = input.isDivisibleBy(3) && input.isDivisibleBy(5);
        return  result ? output : '';
    }

}