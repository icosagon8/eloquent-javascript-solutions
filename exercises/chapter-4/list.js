function arrayToList(arr) {
  let list = null;

  for (let i = arr.length - 1; i >= 0; i--) {
    list = {
      value: arr[i],
      rest: list
    }
  }

  return list;
}

function listToArray(list) {
  let arr = [];

  while (list) {
    arr.push(tmp.value);
    list = list.rest;
  }

  return arr;
}

function prepend(item, list) {
  return {
    item,
    rest: list
  };
}

function nth(list, n) {
  for (let count = 0; count < n; count++) {
    list = list.rest;

    if (!list) {
      return undefined;
    }
  }

  return list.value;
}

function nthRecursion(list, n) {
  if (n === 0) {
    return list.value;
  } else if (!list) {
    return undefined;
  } else {
    return nth(list.rest, n - 1);
  }
}