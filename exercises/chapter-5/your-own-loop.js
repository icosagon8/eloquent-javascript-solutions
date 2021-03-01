function loop(value, condition, update, body) {
  for (let i = value; condition(i); i = update(i)) {
    body(i);
  }
}