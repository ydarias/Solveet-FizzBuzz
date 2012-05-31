function FizzBuzzCalculator(rules) {
    this.rules = rules;

    this.applyRules = function(input) {
        var output = '';
        _.each(this.rules, function(rule) { output += rule.apply(input); })

        return output;
    }

    this.calculate = function(input) {
        var output = this.applyRules(input);
        if (output.length == 0)
            return input;
        else
            return output;
    }
}