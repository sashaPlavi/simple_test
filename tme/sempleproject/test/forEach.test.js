const assert = require("assert");

const { forEach } = require("../index");

let numbers;
beforeEach(() => {
  numbers = [1, 2, 3];
});

it("shuld sum an arry", () => {
  let total = 0;
  forEach(numbers, (value) => {
    total += value;
  });

  assert.strictEqual(total, 6);
  numbers.push(3);
  numbers.push(3);
  numbers.push(3);
});
it("before each", () => {
  assert.strictEqual(numbers.length, 4);
});
