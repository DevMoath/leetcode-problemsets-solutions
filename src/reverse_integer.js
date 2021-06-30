/**
 * @param {number} x
 * @return {number}
 */
const reverse = (x) => {
    let reversed = String(Math.abs(x)).split('').reverse().join('');

    if (reversed < Math.pow(-2, 31) || reversed > Math.pow(2, 31) - 1) {
        return 0;
    }

    return x < 0 ? -reversed : +reversed;
};

// Test cases
console.log(reverse(123) === 321);
console.log(reverse(-123) === -321);
console.log(reverse(120) === 21);
console.log(reverse(1534236469) === 0);
