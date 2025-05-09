function containAllRots(strng, arr) {
  const newArray = [];

  for (let i = 0; i < strng.length; i++) {
    newArray.push(strng.slice(i) + strng.slice(0, i));
  }

  return newArray.every((result) => arr.includes(result));
}
