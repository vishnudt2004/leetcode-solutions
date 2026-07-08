/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
    const ans = [];
    nums.forEach((num, ind) => (ans[ind] = nums[num]))
    return ans;
};