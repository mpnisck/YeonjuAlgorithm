function removeSmallest(numbers) {
  const copyArr = [...numbers];
  const minNumber = Math.min(...numbers);

  for (const i in copyArr) {
    if (copyArr[i] === minNumber) {
      copyArr.splice(i, 1);

      return copyArr;
    }
  }

  return [];
}
