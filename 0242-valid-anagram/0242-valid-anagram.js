/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  const result = (s, t) =>
    s.length !== t.length
      ? false
      : s.split("").sort().join("") === t.split("").sort().join("");

  return result(s, t);
};