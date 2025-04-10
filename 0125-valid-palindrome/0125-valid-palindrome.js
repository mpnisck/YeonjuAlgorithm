var isPalindrome = function(s) {
  const filtered = s
    .split("")
    .filter(str => {
      return (
        (str >= "a" && str <= "z") ||
        (str >= "A" && str <= "Z") ||
        (str >= "0" && str <= "9")
      );
    })
    .map(str => str.toLowerCase())
    .join("");

  return filtered === [...filtered].reverse().join("");
};