/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
};

const isEquals = (a, b) => {
    return Array.isArray(a) && Array.isArray(b) && a.length === b.length &&
        a.every((val, index) => val === b[index]);
};

// Test cases
console.log(isEquals(twoSum([2, 7, 11, 15], 9), [0, 1]));
console.log(isEquals(twoSum([3, 2, 4], 6), [1, 2]));
console.log(isEquals(twoSum([3, 3], 6), [0, 1]));
console.log(isEquals(twoSum([3, 2, 3], 6), [0, 2]));
