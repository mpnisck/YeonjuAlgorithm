function isIsogram(str) {
  let trueStr = str.toUpperCase();
  let repeatNum;
  let returnStr;

  for (let i = 0; i < str.length; i++) {
    for (let j = 1; j < str.length; j++) {
      repeatNum = j;
      if (trueStr[i] === trueStr[i + repeatNum]) {
        return false;
      }
    }
  }
  //   let newReturn = str === "" ? true : returnStr;
  // 빈문자열일때, 반복되지않을때 조건이 성립되지않는다면 true
  return true;
}
