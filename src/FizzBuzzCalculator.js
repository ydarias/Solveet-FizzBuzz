function FizzBuzzCalculator(rules) {

    this.rules = rules;

    this.outputFormatter = new OutputFormatter();

    this.applyRules = function(input) {
        var output = '';
        _.each(this.rules, function(rule) { 
            if (output.length == 0) {
                output += rule.apply(input);
            } 
        })

        return this.outputFormatter.format(output);
    }

    this.calculate = function(input) {
        return this.applyRules(input) || input;
    }

}

function OutputFormatter() {

    function isNumeric(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }

    return {
        format(input) {
            if (isNumeric(input)) {
                return parseInt(input);
            } 

            return input;
        }
    }

} 