/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (s) => {
    let maxLength = 0,
        current = 0,
        hash = {};

    if (s.length < 2) {
        return s.length;
    }

    for (let i = 0; i < s.length; i++) {
        if (hash[s[i]] === undefined) {
            current += 1;
        } else {
            current = Math.min(i - hash[s[i]], current + 1);
        }
        maxLength = Math.max(maxLength, current);
        hash[s[i]] = i;
    }

    return maxLength;
};

// Test cases
console.log(lengthOfLongestSubstring('abcabcbb') === 3);
console.log(lengthOfLongestSubstring('bbbbb') === 1);
console.log(lengthOfLongestSubstring('pwwkew') === 3);
console.log(lengthOfLongestSubstring('dvdf') === 3);
