function XO(str) {
  str = str.toLowerCase();
  return (
    [...str].filter((s) => s === "x").length ===
    [...str].filter((s) => s === "o").length
  );
}
