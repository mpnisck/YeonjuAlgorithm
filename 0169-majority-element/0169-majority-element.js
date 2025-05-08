/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let count = 0;
    let result = null;

    for (let i = 0; i < nums.length; i++) {
        if (count === 0) {
            result = nums[i];
        }
        if (nums[i] === result) {
            count++;
        } else {
            count--;
        }
    }

    return result;
};