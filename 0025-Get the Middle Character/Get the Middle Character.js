function getMiddle(s) {
  let resultStr;
  let num = Math.floor(s.length / 2);

  for (let i = 0; i < s.length; i++) {
    if (s.length % 2 === 1) {
      resultStr = s.substring(num, num + 1);
    } else {
      resultStr = s.substring(num - 1, num + 1);
    }
  }

  return resultStr;
}
