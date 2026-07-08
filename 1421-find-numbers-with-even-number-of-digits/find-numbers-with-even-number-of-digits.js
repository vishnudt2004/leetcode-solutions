/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function (nums) {
    return nums.map((num) => String(num).split("").length).filter((dig) => dig % 2 === 0).length
};