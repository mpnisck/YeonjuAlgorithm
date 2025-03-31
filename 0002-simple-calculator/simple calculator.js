function calculator(a, b, sign) {
  if (typeof a === "string") {
    return "unknown value";
  }
  if (typeof b === "string") {
    return "unknown value";
  }
  if (sign === "-") {
    return a - b;
  } else if (sign === "+") {
    return a + b;
  } else if (sign === "/") {
    return a / b;
  } else if (sign === "*") {
    return a * b;
  } else {
    return "unknown value";
  }
}
