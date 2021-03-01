function every1(array, test) {
  for (let item of array) {
    if (!test(item)) {
      return false;
    }
  }

  return true;
}

function every2(array, test) {
  return !array.some(item => !test(item));
}