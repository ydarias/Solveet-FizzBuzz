// Tips obtenidos de Douglas Crockford en su libro JavaScript: The Good Parts

Function.prototype.method = function(name, func) {
    if (!this.prototype[name]) {
        this.prototype[name] = func;
        return this;
    }
};

Number.prototype.isDivisibleBy = function(divisor) {
    return this % divisor === 0;
}