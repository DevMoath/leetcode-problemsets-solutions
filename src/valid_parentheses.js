/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = (s) => {
    const mappings = new Map([
        [')', '('],
        ['}', '{'],
        [']', '['],
    ]);

    let stack = [];

    for (let i = 0; i < s.length; i++) {
        let c = s[i];

        if (mappings.has(c)) {
            let topElement = stack.length === 0 ? '#' : stack.pop();

            if (topElement !== mappings.get(c)) {
                return false;
            }
        } else {
            stack.push(c);
        }
    }

    return stack.length === 0;
};

// Test cases
console.log(isValid('()') === true);
console.log(isValid('()[]{}') === true);
console.log(isValid('(]') === false);
console.log(isValid('([)]') === false);
console.log(isValid('{[]}') === true);
