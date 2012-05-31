Number.prototype.isDivisibleBy = function(divisor) {
    if (this == 0)
        return false;
    return this % divisor === 0;
}