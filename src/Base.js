Number.prototype.isDivisibleBy = function(divisor) {
    if (this == 0)
        return false;
    return this % divisor === 0;
}

Number.prototype.isPrime = function() {
    if (this <= 1) {
        return true
    } else if (this <= 3) {
        return true
    } else if (this%2 === 0 || this%3 === 0) {
        return false
    }
    
    let i = 5
    while (i*i <= this) {
        if (this%i === 0 || this%(i+2) === 0) {
        return false
        }
        i += 6
    }
    return true
}