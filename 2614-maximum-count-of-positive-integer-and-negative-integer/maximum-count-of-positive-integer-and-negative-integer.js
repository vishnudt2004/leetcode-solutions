/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function (nums) {
    return Math.max(nums.filter((num) => num < 0).length, nums.filter((num) => num > 0).length)
};