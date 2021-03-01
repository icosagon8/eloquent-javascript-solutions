function flattenArray(array) {
  return array.reduce((flatArray, item) => flatArray.concat(item));
}