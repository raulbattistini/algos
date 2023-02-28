function twoSum(nums: number[], target: number): number[] {
  let numObj = {};
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (Object(numObj)[complement] !== undefined) {
      return [Object(numObj)[complement], i];
    }
    Object(numObj)[nums[i]] = i;
  }
  return Object(numObj);
}

let nums = [2, 7, 11, 15],
  target = 9;
console.log(twoSum(nums, target));
