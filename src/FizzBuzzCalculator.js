function FizzBuzzCalculator(rules) {
    this.rules = rules;

    function isNumeric(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }

    this.applyRules = function(input) {
        var output = '';
        _.each(this.rules, function(rule) { 
            if (output.length == 0) {
                output += rule.apply(input);
            } 
        })

        if (isNumeric(output)) {
            return parseInt(output);
        } else {
            return output;
        }
    }

    this.calculate = function(input) {
        return this.applyRules(input) || input;
    }
}