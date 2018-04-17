function TimeMatchRule(timeProvider, outputFunction) {

    function matchesTimeLastCharacters(input) {
        let epochTime = `${timeProvider.getCurrentTime()}`;

        return input == epochTime.substring(epochTime.length - 2);
    }

    this.apply = function(input) {
        return matchesTimeLastCharacters(input) ? (input * input) : '';
    }

}