function validatePIN(pin) {
  let result = pin.length;

  return (result === 4 || result === 6) && /^\d+$/.test(pin);
}
