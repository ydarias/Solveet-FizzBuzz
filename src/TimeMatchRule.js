function TimeMatchRule(timeProvider, outputFunction) {

    function matchesTimeLastCharacters(input) {
        let epochTime = `${timeProvider.getCurrentTime()}`;

        console.log(`testing ${epochTime.substring(epochTime.length - 2)} with ${input}`);

        console.log(`testing is ${epochTime.substring(epochTime.length - 2) == input}`);

        return input == epochTime.substring(epochTime.length - 2);
    }

    this.apply = function(input) {
        return matchesTimeLastCharacters(input) ? (input * input) : '';
    }

}