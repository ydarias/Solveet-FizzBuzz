function FizzBuzzCalculator(rules) {
    this.rules = rules;

    this.applyRules = function(input) {
        var output = '';
        _.each(this.rules, function(rule) { output += rule.apply(input); })

        return output;
    }

    this.calculate = function(input) {
        return this.applyRules(input) || input;
    }
}