/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = (s) => {
    const romans = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };

    let strings = s.split(''),
        result = 0,
        i,
        number,
        nextNumber;

    for (i = 0; i < strings.length; i++) {
        number = romans[strings[i]];
        nextNumber = romans[strings[i + 1]];

        if (number < nextNumber) {
            result -= number;
        } else {
            result += number;
        }
    }

    return result;
};

// Test cases
console.log(romanToInt('III') === 3);
console.log(romanToInt('IV') === 4);
console.log(romanToInt('IX') === 9);
console.log(romanToInt('LVIII') === 58);
console.log(romanToInt('MCMXCIV') === 1994);
