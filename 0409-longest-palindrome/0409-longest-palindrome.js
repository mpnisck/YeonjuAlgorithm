/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
  const count = {};
  let length = 0;

  for (const str of s) {
    count[str] = (count[str] || 0) + 1;
    if (count[str] % 2 === 0) length += 2;
  }

  return length < s.length ? length + 1 : length;
};
