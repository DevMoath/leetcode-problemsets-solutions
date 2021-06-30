/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = (strs) => {
    let prefix = '',
        length = Math.max(...strs.map((s) => s.length));

    for (let i = 0; i < length; i++) {
        let temp = [];

        for (let j = 0; j < strs.length; j++) {
            temp.push(strs[j][i]);
        }

        temp = new Set(temp);

        if (temp.size !== 1) {
            break;
        }

        prefix += temp.values().next().value;
    }

    return prefix;
};

// Test cases
console.log(longestCommonPrefix(['flower', 'flow', 'flight']) === 'fl');
console.log(longestCommonPrefix(['dog', 'racecar', 'car']) === '');
