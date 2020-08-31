const assert = require("assert");

const { forEach, map } = require("./index");

// const test = (desc, fn) => {
//   console.log("---", desc);
//   try {
//     fn();
//   } catch (err) {
//     console.log(err.message);
//   }
// };

it("forEach function", () => {
  let sum = 0;
  forEach([1, 2, 3], (value) => {
    sum += value;
  });
  //console.log(sum);

  assert.strictEqual(sum, 6, "expected 7");
});

it("map function", () => {
  const result = map([1, 2, 3], (value) => {
    return value * 2;
  });

  assert.deepEqual(result, [2, 4, 6]);

  //   assert.strictEqual(result[0], 2);
  //   assert.strictEqual(result[1], 4);
  //   assert.strictEqual(result[2], 6);
});
