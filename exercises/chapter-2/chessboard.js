'use strict';

const SIZE = 8;
let grid = '';

for (let i = 0; i < SIZE; i++) {
  for (let j = 0; j < SIZE; j++) {
    (j + i) % 2 ? grid += '#' : grid += ' ';
  }
  grid += '\n';
}

console.log(grid);