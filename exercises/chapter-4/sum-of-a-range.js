function range(start, end, step = start < end ? 1 : -1) {
  let arr = [];

  if (step > 0) {
    for (let i = start; i <= end; i += step) {
      arr.push(i);
    }
  } else {
    for (let i = start; i >= end; i += step) {
      arr.push(i);
    }
  }

  return arr;
}

function sum(arr) {
  let result = 0;

  for (let item of arr) {
    result += item;
  }

  return result;
}