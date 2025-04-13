function solution(nums) {
  if (!Array.isArray(nums)) {
    return [];
  }

  const arr = nums.sort((a, b) => a - b);

  return arr;
}
