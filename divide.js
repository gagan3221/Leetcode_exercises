/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    if (dividend === -2147483648 && divisor === -1) return 2147483647;
    let res = dividend / divisor;
    if (res < 0) {
        if (dividend % divisor == 0) return Math.floor(res);
        return Math.floor(res) + 1;
    }
    return Math.floor(res)
};