/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = (x) => {
    if (x < 0) {
        return false;
    }

    return x == String(x).split('').reverse().join('');
};

// Test cases
console.log(isPalindrome(121) === true);
console.log(isPalindrome(-121) === false);
console.log(isPalindrome(10) === false);
console.log(isPalindrome(1221) === true);
