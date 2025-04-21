function expandedForm(num) {
  const newStr = num.toString().split("");
  const result = [];

  for (let i = 0; i < newStr.length; i++) {
    const changeStr = Math.pow(10, newStr.length - i - 1);

    if (newStr[i] !== "0") {
      result.push(newStr[i] * changeStr);
    }
  }

  return result.join(" + ");
}
