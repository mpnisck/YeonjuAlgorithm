function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
  if (enteredCode === correctCode) {
    if (new Date(currentDate) <= new Date(expirationDate)) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}
