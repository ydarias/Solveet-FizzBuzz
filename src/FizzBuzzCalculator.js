function FizzBuzzCalculator(rules) {
    this.rules = rules;

    this.applyRules = function(input) {
        var output = '';
        _.each(this.rules, function(rule) { 
            if (output.length == 0) {
                output += rule.apply(input);
            } 
        })

        return output;
    }

    this.calculate = function(input) {
        return this.applyRules(input) || input;
    }
}