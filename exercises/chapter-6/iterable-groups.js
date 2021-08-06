class Group {
  constructor() {
    this.members = [];
  }

  add(value) {
    if (!this.has(value)) this.members.push(value);
  }

  delete(value) {
    const index = this.members.indexOf(value);
    if (index !== -1) this.members.splice(index, 1);
  }

  has(value) {
    return this.members.includes(value);
  }

  static from(iterable) {
    const group = new Group();

    for (let value of iterable) {
      group.add(value);
    }

    return group;
  }

  [Symbol.iterator]() {
    return new GroupIterator(this);
  }
}

class GroupIterator {
  constructor(group) {
    this.position = 0;
    this.group = group;
  };

  next() {
    if (this.position >= this.group.members.length) return {done: true};
    let value = this.group.members[this.position];
    this.position++;

    return {value, done: false};
  }
}
